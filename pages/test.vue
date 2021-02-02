<template>
    <h1>HELLO WORD</h1>
</template>

<script>
export default {
  async asyncData({ app, params, error }) {

     const messageRef = await app.$fire.firestore.collection('regions').doc('Bree');
     const regions = await app.$fire.firestore.collection('regions').get();

    messageRef.get().then(doc => console.log(doc.data()));

    console.log("region docs");
    console.log(regions.docs.map(doc => doc.data()));

    const data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
    };

    // Add a new document in collection "cities" with ID 'LA'
    const res = await app.$fire.firestore.collection('regions').doc('test').set(data);
    console.log(res);
  }
}
</script>