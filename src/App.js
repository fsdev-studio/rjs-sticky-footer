import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';


function FooterBody(){
  return(
    <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{color:'white', fontSize:16,padding:45,width:'50%',height:'50%'}}>
          This is my footer
        </div>
        <div style={{ fontSize:16,color:'white',padding:45,width:'50%',height:'50%'}}>
          This is my footer
        </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{color:'black', fontSize:16,background:'white',padding:45,width:'50%',height:'50%',margin:45}}>
     Hello m
      </div>
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{color:'black', fontSize:16,background:'white',padding:45,width:'50%',height:'50%',margin:45}}>
       Hello v
        </div>
        </div>
        <div style={{display:'flex', flexDirection:'row'}}>
          <div style={{color:'black', fontSize:16,background:'white',padding:45,width:'50%',height:'50%',margin:45}}>
         Hello m
          </div>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{color:'black', fontSize:16,background:'white',padding:45,width:'50%',height:'50%',margin:45}}>
           Hello m
            </div>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{color:'black', fontSize:16,background:'white',padding:45,width:'50%',height:'50%',margin:45}}>
             Hello m
              </div>
              </div>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{color:'black', fontSize:16,background:'white',padding:45,width:'50%',height:'50%',margin:45}}>
               Hello m
                </div>
                </div>


      <Footer
        background={'blue'}
        opacity={0.5}
        footerBody={<FooterBody/>}
        isSticky={false}
      />
    </div>
  );
}

export default App;
