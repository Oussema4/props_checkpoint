
import './prof.css';
import Profile from './profile/profile';


function App() {
const handleName=(x)=>{alert(x)}
const fullName="Oussema Belgaied"
const bio="I'll change the world"
const profession="Super Hero"
const stl={textAlign:"center",backgroundColor:"#D5FF9A",color:"blue"}



  return (
    <div  style={stl}>
     <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
       
       <img src="b.jpg" alt="" width={900}/>
       
       </Profile> 
    </div>
  );
}

export default App;
