export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  let user = server.create('user', { name: 'Ned' });
  user.createThing('picture', { title: 'lorem Ipsem' });
  user.createSpecialThing('picture', { title: 'Special' });
}
