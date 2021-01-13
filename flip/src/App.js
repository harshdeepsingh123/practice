import React,{useEffect,useState} from 'react'
import Head from './components/Head'
import Loader from './components/Loader'
import Images from './components/Images'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;
function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 10) => {
    
   

    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        const pictures = res.data.slice(0, 10);
        setImage([...images, ...pictures]);
      }).catch(err=>{
        console.log(err);
      })
  }
  return (
    <div >
      <Head>
      </Head>
      <GlobalStyle />
    
      <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<Loader />}
    >
      <WrapperImages>
        {images.map(image => (
          <Images url={image.url} key={image.id} />
        ))}
      </WrapperImages>
    </InfiniteScroll>
    </div>
  );
}

export default App;
