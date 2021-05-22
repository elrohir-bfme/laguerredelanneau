<template>
  <div class="container mx-auto">
    <div class="flex">
      <div class="w-full p-8">
        <pre class="p-4 bg-gray-100">{{ JSON.stringify(me, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
    layout: "wotn",
    middleware: ['authenticated'],
    data(){
        return {
        me: {}
        }
    },
    apollo: {
        me: {
        query: gql`
            query {
            me{
                id
                email
                username
                role{
                name
                }
            }
            }
        ` 
        }
    }
}
</script>