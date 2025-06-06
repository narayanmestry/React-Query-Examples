## ✅ Key Things to Consider

# Detecting Mode (Add vs Edit)

-- check the route and if any ID pass in the route then it is Edit mode

        const { id } = useParams(); // from react-router
        const isEdit = Boolean(id); // if `id` exists => Edit mode

# Initial Form Values

    -- For Add : use Blank values
    -- For Edit : Fetch data using given 'id' and preFill the form

        const { data, isLoading } = useQuery(['user', id], () => fetchUserById(id), {
            enabled: isEdit, // only fetch if editing
        });

        const initialValues = isEdit
        ? { name: data?.name || "", email: data?.email || "" }
        : { name: "", email: "" };

# Validation Schema -

    -- somewhere need to manage conditionally

# Form Submission Handler

    -- conditionally set mutation logic

        const mutation = useMutation(isEdit ? updateUser : addUser);

        const handleSubmit =   (values) => {
        mutation.mutate(isEdit ? { id, ...values } : values);
        };

# UI Text and Labels
    -- Adjust headings, button text, etc. dynamically:

        <h2>{isEdit ? "Edit User" : "Add User"}</h2>
        <button type="submit">{isEdit ? "Update" : "Create"}</button>

# Redirect After Submit
    -- After successful add/edit, redirect to list/detail page:
        onSuccess: () => navigate('/users')



-- get id
-- fetch userdetails usig id
-- prefill form 
-- edit form 
-- submit form
