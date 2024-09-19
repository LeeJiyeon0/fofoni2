import React,{useState} from "react";

function SignUp(props){
    const [name,setName] = useState("");
    const [gender, setGender] = useState("남자");
    const [number, setNumber] = useState("");

    const handleChangeName = (event)=>{
        setName(event.target.value);
    };

    const handleChangegender = (event)=>{
        setGender(event.target.value);
    };

    const handleChangenumber = (event)=>{
        setNumber(event.target.value);
    };

    const handleSubmit = (event)=>{
        alert(`이름:${name}, 성별: ${gender}, 전화번호: ${number}`);
        event.preventDefault();
};

return (
    <form onSubmit={handleSubmit}>
        <label>
            이름:
            <input type="text" value={name} onChange={handleChangeName}/>
        </label>
        <br />
        <label>
            성별:
            <select value={gender} onChange={handleChangegender}>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
            </select>
        </label>
        <br />
        <label>
            전화번호:
            <input type="text" value={number} onChange={handleChangenumber}>
                
            </input>
        </label>
        <button type="submit">제출</button>
    </form>
);
}
export default SignUp;