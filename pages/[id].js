import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }){
  const itemData = await getData(params.id);
  return{
    props:{
      itemData
    }
  };
}

export async function getStaticPaths(){
  const paths = await getAllIds();
  return{
    paths,
    fallback: false
  };
}

export default function Entry( {itemData} ) {
  return(
    <Layout>
        <article className="card col-6">
          <div className="card-body">
            <h5 className="card-title">{itemData.post_title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.user_login}</h6>
            <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.post_content}}/>
          </div>
        </article>
    </Layout>
  );
}