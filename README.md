## next-js

#### 3 Key feature of nextjs

1. Server side rendering
2. File based routing
3. Framework to build fullstack app

---

#### Nextjs learning path

**1. Routing in nextjs:**

1. Page based routing
2. Nested routes
3. Dynamic routes
4. Nested dynamic routes
5. Catch all routes
6. Link component
7. Programmatic navigation
8. custom 404 page

`Programmatic Navigation:` Programmatic navigation can be done using useRouter() hook, various route method available to route

**2. Pre rendering and data fetching**

1. Pre rendering
2. Static generation
3. getStaticProps
4. Static generation with dynamic params
5. getStaticPath
6. Incremental static generation
7. Serverside rendering
8. getServersideProps
9. Client side data fetching

---

**3. API Routes**

1. File based route
2. Handle GET and POST
3. Dynamic API route
4. Handle PUT, PATCH and DElETE
5. Catch all route

#### Some key concepts:

Environment variables support:

Can inject envs directly to the project using `process.env` available only in server side rendering methods (Data fetching and API routes like `getStaticProps`)

To expose envs to browser it should be prefixed with `NEXT_PUBLIC_`
