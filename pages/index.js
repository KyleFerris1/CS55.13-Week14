
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList as getContacts } from '../lib/data';
import { getSortedList as getProducts} from '../lib/data2';
import { getSortedList as getLocations} from '../lib/data3';

export async function getStaticProps() {
  const contacts = await getContacts();
  const products = await getProducts();
  const locations = await getLocations();
  
  
  return{
    props:{
      contacts,
      products,
      locations
    }
  };
}


export default function Home({contacts, products, locations}) {
  return (
    <Layout home>
      <h1>Contacts</h1>
      <div className="list-group">
        {contacts.map(
          ({id, name}) => (
            <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
              {name}
            </Link>
          )
        )
        }
      </div>

      

      <h1>Products</h1>
      <div className="list-group">
        {products.map(
          ({id, name}) => (
              <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
          }
      </div>

      <h1>Locations</h1>
      <div className="list-group">
        {locations.map(
          ({id, name}) => (
            <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
              {name}
            </Link>
          )
        )
        }
      </div>
    </Layout>
  );
}
