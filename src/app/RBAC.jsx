import { useAuth } from "./AuthContext";

const permissions={
    Admin:["VIEW","EDIT"],
    Agent:["VIEW"]
}

export const Can=({action,children})=>{
    const {user}=useAuth();
    return permissions[user.role].includes(action)? children : null;
}