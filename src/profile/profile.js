
import propTypes from "prop-types"

function Profile({fullName,bio,profession,handleName,children}){
    const stl={color:"red"}
return(


<div>
    
    <h1 style={stl}>{fullName}</h1>
    <h2>{bio}</h2>
    <h3>{profession}</h3>

    

{children}
<br/>
<button onClick={()=>handleName(fullName)}>Click</button>

</div>

)

}

Profile.defaultProps={
    fullName:"No name",bio:"No bio",profession:"No profession"
    
}

Profile.propTypes={
fullName:propTypes.string, bio:propTypes.string, profession:propTypes.string, handleName:propTypes.func


}

export default Profile