//1. import dependencies
import { Box, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { userslist, useSubmitUser,fetchUserById,useUpdateUser } from "../react-query/query/userQuery";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//2. Create a validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be atleast 2 Character")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  age: Yup.number()
    .min(18, "Age must be atleast 18")
    .max(60, "Age must be less than 60")
    .required("Age is required"),
});


//3. Define Initial values for the form
const initialValues = {
  id: "",
  name: "",
  email: "",
  age: "",
};


function AddEditUser() {
  // Get the userId from the URL params and Check if it's in edit mode
  const {id} = useParams();
  const isEditMode = Boolean(id);

  
  const [newUserId, setNewUserId] = useState<number | null>(0);
  const { data: userList } = userslist();
  const {data:userInfo} = fetchUserById(id as string);
  const addUserMutation = useSubmitUser();
  const editUserMutation = useUpdateUser();

  const finalMutation = isEditMode ? editUserMutation : addUserMutation;


  console.log("Edit User Details ", userInfo);

  // 4. handle onSubmit function
  const handleSubmit = (values: any, { resetForm }: any) => {
    finalMutation.mutate(isEditMode?{id,...values}:values, {
      onSuccess: () => {
        resetForm();
      },
    });
  };
  useEffect(() => {
    if (userList && userList.length > 0) {
      const lastUserId = Number(userList[userList.length - 1].id);
      setNewUserId(lastUserId + 1);
    }
  }, [userList]);

  const newInitialValues = isEditMode ? {
    id: userInfo?.id || "",
    name: userInfo?.name || "",
    email: userInfo?.email || "",
    age: userInfo?.age || "",
  }  : {
    ...initialValues,
    id: newUserId !== null ? newUserId.toString() : "",
  };
  return (
    <Box>
      <h1>{isEditMode?"Edit":"Add"} User</h1>
      {/* Add your form or components for adding a user here */}
      <Formik
        initialValues={newInitialValues}
        enableReinitialize={true} // This allows the form to reinitialize when initialValues change
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <Field type="number" name="age" />
              <ErrorMessage name="age" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isEditMode?"Edit":"Add"} User
            </button>
          </Form>
        )}
      </Formik>
      <Box>
        <Typography
          variant="body1"
          color={finalMutation.isSuccess ? "green" : "red"}
        >
          {finalMutation.isSuccess &&
            `User ${finalMutation?.data?.name} ${isEditMode?"Updated":"Added"} successfully!`}
          {finalMutation.isError &&
            "Something went wrong, please try again!"}
        </Typography>
      </Box>
    </Box>
  );
}

export default AddEditUser;
