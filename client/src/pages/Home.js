import {useAuth} from "../context/Auth";

export default function Home() {
  const [auth, setAuth] = useAuth();

    return (
      <div>
        <h1>
          This is the Home Page
        </h1>
      </div>
    );
  }