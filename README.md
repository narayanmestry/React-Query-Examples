React Query Curriculum
-------------------------------------
Module 1: Introduction to React Query
          ✅ What is React Query and why use it?
          ✅ Comparison with Redux and other data-fetching strategies
          ✅ Installation and setup     

              npm install @tanstack/react-query
              Setup QueryClient and QueryClientProvider



Module 2: Basic Data Fetching
          ✅ useQuery Hook

              Basic usage
              Query keys
              Query function (async/await pattern)

          ✅ Status flags: isLoading, isError, data, error

          ✅ DevTools integration

              import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

Module 3: Query Configuration

          ✅ Caching and background refetching

          ✅ Retry behavior

          ✅ Stale time, cache time

          ✅ Polling: refetchInterval

          ✅ enabled option for conditional fetching

Module 4: Mutations
          ✅ useMutation hook
              POST, PUT, DELETE requests

          ✅ Handling mutation states

          ✅ Optimistic updates

          ✅ Rollbacks on error

Module 5: Query Invalidation and Refetching

          ✅ queryClient.invalidateQueries

          ✅ queryClient.refetchQueries

          ✅ Manual refetching

          ✅ Dependent (chained) queries



Module 6: Pagination and Infinite Queries

          ✅ Paginated queries with useQuery

          ✅ Infinite scrolling with useInfiniteQuery

          ✅ Cursor-based vs offset-based pagination



Module 7: Advanced Patterns
          ✅ Dynamic query keys

          ✅ Prefetching data
		      

          ✅ Hydration (SSR with Next.js)

          ✅ Selectors (select option in useQuery)

          ✅ Placeholders & initial data

          ✅ Handling authentication with React Query


Module 8: React Query + Dev Tools & Libraries

          ✅ React Query DevTools (deep dive)

          ✅ Integration with Axios or Fetch

          ✅ Using with Zustand, Redux Toolkit Query, etc. (comparison)

          ✅ Handling file uploads


Module 9: Performance & Best Practices

          ✅ Preventing unnecessary refetches

          ✅ Effective query key design

          ✅ Keeping the UI responsive

          ✅ Error boundaries and React Query


Optional: React Query with Server Components (RSC) (React 18+)

          ✅ SSR and hydration in frameworks like Next.js

          ✅ Query hydration + dehydration

          ✅ Streaming and suspense



🔧 Practice Ideas
Build a GitHub repo viewer using useQuery


Create a Todo app using useMutation and query invalidation


Add infinite scroll to a blog/news site


Simulate optimistic updates with rollback on failure


Combine with Next.js for SSR/hydration practice


# #########################################################################################################

# What is React Query ?
---------------
 - Data fetching and Server state management library
 - it simplify Data Fetching , Caching , state management , synchronization 

# Why React Query ?
--------------
 -- we can avoid repetitive API fetching , increase the performance of the system
 -- we can manage the state in short code , no need to use useState manually.

# What is Client Provider ?
----------------------
One of the react component that make query Client available to all react app

# What is Query Client ?
-------------------- 
 it is the core manager that fetching data and store and handle the cache

# useQuery Hook - 
-------------------
 -- use to fetch data and store in the cache to avoid repetitive data fetching 

 -- it return object containing properties - like : 
	data, 
	error, 
	
 	idle
	error
	loading
	success

	isIdle
	isLoading
	isSuccess , 
	isError, 
	isFetching
	isRefetching
	isPending

	refetch()
	remove()

	isStale
	isPlaceholderData
	isPreviousData
	isFetchAfterMount
	isLoadingError
	isRefetchError

   -- useQuery accept single, option object with following parameters
        queryKey
	queryFn
	enabled
	staleTime
	cacheTime / gcTime
	refetchOnWindowFocus
	retry
	select
	onSuccess
	onError


# What is queryKey ?
------------------	
	-- its unique identifier for specific data
	-- it can help us , what data should fetch , catch and refetch
	-- queryKey can provided in two format : 
		1. String format
		2. array Format -------------- always recommended if dynamic and we can invalidate on specific argument also

	 
	
# Manual and automatic fetching 
------------------------------
	for manual fetching we use reFetch function for useQuery properties  and pass the parameter enabled : false
	 
        for automatic fetch there are some situation which we can pass in configution 
	like 
		1. refetchOnWindowFocus
		2. refetchOnConnetct
		3. refetchInterval
		4. Staletime
		5. enabled : true

# What is Mutation ?
-----------------------
	mutation is use to perform create, update or delete operation on serve. we use useMutation hook
	
     -- properties of useMutation
	
	1. mutation.mutate(data)
	2. mutation.isPending	   
	3. mutation.isSuccess
	4. mutation.error
	5. mutation.isError
	6. mutation.data

    -- useMutation access object as argument
	
	1. onMutate   - run before mutateFn, used to Optimistic update
	2. mutationFn -  
	3. onSuccess  -
	4. onError    - 
	5. onSettled  - 
	6. retry      - 
	7. retrydelay - 
	8. meta       - 
	9. gcTime     - 	
		
# Prefetching in React Query	
✅ Important Notes Related to Prefetching in React Query
	Even if we prefetch the data before navigating, we still need to fetch the data again using useQuery on the target page.
	-- Why?
	Because prefetchQuery only stores the data in the cache, it doesn't automatically provide it to the component.
	
	-- When useQuery runs on the new page:
	It checks if the data is already available in the cache.
		If the data is fresh (based on staleTime) and the queryKey matches:
			✅ React Query uses the cached data.
		If the data is not in the cache or is stale:
			🔁 It triggers a new fetch, updates the cache, and provides fresh data to the component. 
 
 

