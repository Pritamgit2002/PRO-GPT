import React from "react";
//import {Button} from /components/ui/button";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div>
      Landing Page(Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      </div>
      <div>
        <Link href="/sign-up">
          <Button>Registar</Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
