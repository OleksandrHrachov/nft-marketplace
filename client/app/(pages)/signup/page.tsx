import { CustomLink } from "@/app/components/CustomLink";
import "./SignUp.scss";

export default function SignUp() {
  return (
    <div className="sign-up">
      <h2 className="sign-up__title">
      At the moment there is no registration and everyone can view all available content.
      </h2>
      <CustomLink variant="outline" href="/">
        Return Home
      </CustomLink>
    </div>
  );
}
