import { redirect } from "react-router-dom";

async function loadDataUser() {
  const token = localStorage.getItem('token');
  if (!token) return redirect('/');
  if (token) {
    try {
      const response = await fetch(`http://127.0.0.1:1234/bloc/${token}`);
      if (!response.ok) throw response;
      const json = await response.json();
      return json;
    } catch (error) {
      return redirect('/');
    }
  } else {
    return null;
  }
}

export {loadDataUser}