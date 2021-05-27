<template>
  <div>lol</div>
</template>

<script>
export default {
  async fetch ({ route, redirect, $strapi }) {
    try {
      const { jwt } = await $strapi.$http.$get('/auth/discord/callback', {
        searchParams: {
          access_token: route.query.access_token
        }
      })

      $strapi.setToken(jwt)

      await $strapi.fetchUser()

	  // Useful if you have a middleware that sets the `redirect` cookie when accessing a private page
      redirect($strapi.$cookies.get('redirect') || '/')
    } catch (e) {}
  }
}
</script>