import styled from "styled-components";
import { GoogleIcon } from "./icons/GoogleIcon";

const SignWithGoogle = styled.a`
  height: 74px;
  background: #fff;
  border: 2px solid #1a1a1a;
  border-radius: 8px;
  cursor: pointer;
  color: #1a1a1a;
  font-family: NexaBold, sans-serif;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 40px;

  svg {
    margin-right: 72px;
  }
`;

type SignWithGoogleButtonProps = {
  onClick?: () => void;
};

export const SignWithGoogleButton = ({
  onClick,
}: SignWithGoogleButtonProps) => (
  <SignWithGoogle href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:8080/api/sessions/oauth/google&client_id=953416637342-na07b6hnrck6dfs8fqpp5fah64jbf84e.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https://www.googleapis.com/auth/userinfo.profile  https://www.googleapis.com/auth/userinfo.email">
    <GoogleIcon /> Sign In with Google
  </SignWithGoogle>
);
