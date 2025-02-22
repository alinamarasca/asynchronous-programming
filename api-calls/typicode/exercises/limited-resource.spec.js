import { limitedResource } from './limited-resource.js';

describe('limitedResource: fetches a limited number of a specific resource type', () => {
  it('should fetch 0 comments', async () => {
    const actual = await limitedResource('comments', 0);
    expect(actual).toEqual([]);
  });
  it('should fetch 3 photos', async () => {
    const actual = await limitedResource('photos', 3);
    expect(actual).toEqual([
      {
        albumId: 1,
        id: 1,
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
      },
      {
        albumId: 1,
        id: 2,
        title: 'reprehenderit est deserunt velit ipsam',
        url: 'https://via.placeholder.com/600/771796',
        thumbnailUrl: 'https://via.placeholder.com/150/771796',
      },
      {
        albumId: 1,
        id: 3,
        title: 'officia porro iure quia iusto qui ipsa ut modi',
        url: 'https://via.placeholder.com/600/24f355',
        thumbnailUrl: 'https://via.placeholder.com/150/24f355',
      },
    ]);
  });
  it('should fetch 4 todos', async () => {
    const actual = await limitedResource('todos', 4);
    expect(actual).toEqual([
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: 'fugiat veniam minus',
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: 'et porro tempora',
        completed: true,
      },
    ]);
  });
  it('should fetch 10 posts', async () => {
    const actual = await limitedResource('posts', 10);
    expect(actual).toEqual([
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body:
          'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      },
      {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body:
          'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      },
      {
        userId: 1,
        id: 4,
        title: 'eum et est occaecati',
        body:
          'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
      },
      {
        userId: 1,
        id: 5,
        title: 'nesciunt quas odio',
        body:
          'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
      },
      {
        userId: 1,
        id: 6,
        title: 'dolorem eum magni eos aperiam quia',
        body:
          'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
      },
      {
        userId: 1,
        id: 7,
        title: 'magnam facilis autem',
        body:
          'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
      },
      {
        userId: 1,
        id: 8,
        title: 'dolorem dolore est ipsam',
        body:
          'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
      },
      {
        userId: 1,
        id: 9,
        title: 'nesciunt iure omnis dolorem tempora et accusantium',
        body:
          'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
      },
      {
        userId: 1,
        id: 10,
        title: 'optio molestias id quia eum',
        body:
          'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
      },
    ]);
  });
  it('should fetch 15 users', async () => {
    const actual = await limitedResource('users', 15);
    expect(actual).toEqual([
      {
        address: {
          city: 'Gwenborough',
          geo: { lat: '-37.3159', lng: '81.1496' },
          street: 'Kulas Light',
          suite: 'Apt. 556',
          zipcode: '92998-3874',
        },
        company: {
          bs: 'harness real-time e-markets',
          catchPhrase: 'Multi-layered client-server neural-net',
          name: 'Romaguera-Crona',
        },
        email: 'Sincere@april.biz',
        id: 1,
        name: 'Leanne Graham',
        phone: '1-770-736-8031 x56442',
        username: 'Bret',
        website: 'hildegard.org',
      },
      {
        address: {
          city: 'Wisokyburgh',
          geo: { lat: '-43.9509', lng: '-34.4618' },
          street: 'Victor Plains',
          suite: 'Suite 879',
          zipcode: '90566-7771',
        },
        company: {
          bs: 'synergize scalable supply-chains',
          catchPhrase: 'Proactive didactic contingency',
          name: 'Deckow-Crist',
        },
        email: 'Shanna@melissa.tv',
        id: 2,
        name: 'Ervin Howell',
        phone: '010-692-6593 x09125',
        username: 'Antonette',
        website: 'anastasia.net',
      },
      {
        address: {
          city: 'McKenziehaven',
          geo: { lat: '-68.6102', lng: '-47.0653' },
          street: 'Douglas Extension',
          suite: 'Suite 847',
          zipcode: '59590-4157',
        },
        company: {
          bs: 'e-enable strategic applications',
          catchPhrase: 'Face to face bifurcated interface',
          name: 'Romaguera-Jacobson',
        },
        email: 'Nathan@yesenia.net',
        id: 3,
        name: 'Clementine Bauch',
        phone: '1-463-123-4447',
        username: 'Samantha',
        website: 'ramiro.info',
      },
      {
        address: {
          city: 'South Elvis',
          geo: { lat: '29.4572', lng: '-164.2990' },
          street: 'Hoeger Mall',
          suite: 'Apt. 692',
          zipcode: '53919-4257',
        },
        company: {
          bs: 'transition cutting-edge web services',
          catchPhrase: 'Multi-tiered zero tolerance productivity',
          name: 'Robel-Corkery',
        },
        email: 'Julianne.OConner@kory.org',
        id: 4,
        name: 'Patricia Lebsack',
        phone: '493-170-9623 x156',
        username: 'Karianne',
        website: 'kale.biz',
      },
      {
        address: {
          city: 'Roscoeview',
          geo: { lat: '-31.8129', lng: '62.5342' },
          street: 'Skiles Walks',
          suite: 'Suite 351',
          zipcode: '33263',
        },
        company: {
          bs: 'revolutionize end-to-end systems',
          catchPhrase: 'User-centric fault-tolerant solution',
          name: 'Keebler LLC',
        },
        email: 'Lucio_Hettinger@annie.ca',
        id: 5,
        name: 'Chelsey Dietrich',
        phone: '(254)954-1289',
        username: 'Kamren',
        website: 'demarco.info',
      },
      {
        address: {
          city: 'South Christy',
          geo: { lat: '-71.4197', lng: '71.7478' },
          street: 'Norberto Crossing',
          suite: 'Apt. 950',
          zipcode: '23505-1337',
        },
        company: {
          bs: 'e-enable innovative applications',
          catchPhrase: 'Synchronised bottom-line interface',
          name: 'Considine-Lockman',
        },
        email: 'Karley_Dach@jasper.info',
        id: 6,
        name: 'Mrs. Dennis Schulist',
        phone: '1-477-935-8478 x6430',
        username: 'Leopoldo_Corkery',
        website: 'ola.org',
      },
      {
        address: {
          city: 'Howemouth',
          geo: { lat: '24.8918', lng: '21.8984' },
          street: 'Rex Trail',
          suite: 'Suite 280',
          zipcode: '58804-1099',
        },
        company: {
          bs: 'generate enterprise e-tailers',
          catchPhrase: 'Configurable multimedia task-force',
          name: 'Johns Group',
        },
        email: 'Telly.Hoeger@billy.biz',
        id: 7,
        name: 'Kurtis Weissnat',
        phone: '210.067.6132',
        username: 'Elwyn.Skiles',
        website: 'elvis.io',
      },
      {
        address: {
          city: 'Aliyaview',
          geo: { lat: '-14.3990', lng: '-120.7677' },
          street: 'Ellsworth Summit',
          suite: 'Suite 729',
          zipcode: '45169',
        },
        company: {
          bs: 'e-enable extensible e-tailers',
          catchPhrase: 'Implemented secondary concept',
          name: 'Abernathy Group',
        },
        email: 'Sherwood@rosamond.me',
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        phone: '586.493.6943 x140',
        username: 'Maxime_Nienow',
        website: 'jacynthe.com',
      },
      {
        address: {
          city: 'Bartholomebury',
          geo: { lat: '24.6463', lng: '-168.8889' },
          street: 'Dayna Park',
          suite: 'Suite 449',
          zipcode: '76495-3109',
        },
        company: {
          bs: 'aggregate real-time technologies',
          catchPhrase: 'Switchable contextually-based project',
          name: 'Yost and Sons',
        },
        email: 'Chaim_McDermott@dana.io',
        id: 9,
        name: 'Glenna Reichert',
        phone: '(775)976-6794 x41206',
        username: 'Delphine',
        website: 'conrad.com',
      },
      {
        address: {
          city: 'Lebsackbury',
          geo: { lat: '-38.2386', lng: '57.2232' },
          street: 'Kattie Turnpike',
          suite: 'Suite 198',
          zipcode: '31428-2261',
        },
        company: {
          bs: 'target end-to-end models',
          catchPhrase: 'Centralized empowering task-force',
          name: 'Hoeger LLC',
        },
        email: 'Rey.Padberg@karina.biz',
        id: 10,
        name: 'Clementina DuBuque',
        phone: '024-648-3804',
        username: 'Moriah.Stanton',
        website: 'ambrose.net',
      },
    ]);
  });
});
