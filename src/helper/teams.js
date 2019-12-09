export const teamListConfig = (teams, devs, clients) => {
  return teams.map(team => {
    const detailed = { ...team }

    clients.map(client => {
      if( detailed.c_id === client.id ) {
        delete detailed.c_id;
        delete detailed.client_first;
        delete detailed.client_last;
        detailed.client = client;
      }
    });

    devs.map(dev => {

      if(dev.id === detailed.b_id) {
        delete detailed.b_id;
        detailed.backend = dev;
      }

      if(dev.id === detailed.f_id) {
        delete detailed.f_id;
        detailed.frontend = dev;
      }

      if(dev.id === detailed.u_id) {
        delete detailed.u_id;
        detailed.ui = dev;
      }

      if(dev.id === detailed.d_id) {
        delete detailed.d_id;
        detailed.devops = dev;
      }

    });

    return detailed;
  });
}