import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // For now, allow all users (including unauthenticated)
        // You can modify this to require authentication for specific routes
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    // Protect specific routes if needed
    // "/admin/:path*",
    // "/profile/:path*"
  ]
}