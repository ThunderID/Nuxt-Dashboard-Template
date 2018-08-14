export default function ({app, error, redirect}) {
    const hasToken = !!app.$apolloHelpers.getToken()
    if (!hasToken) {
        redirect('/')
    }
}