import { Fragment, useState } from "react";
import {
	LoginForm,
	LoginMainFooterBandItem,
	LoginPage as PatternFlyLoginPage,
} from "@patternfly/react-core";
import ExclamationCircleIcon from "@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon";
import { Link } from "react-router";

export default function LoginPage() {
	const [showHelperText, setShowHelperText] = useState(false);
	const [email, setEmail] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [password, setPassword] = useState("");
	const [isValidPassword, setIsValidPassword] = useState(true);

	const handleUsernameChange = (
		_event: React.FormEvent<HTMLInputElement>,
		value: string
	) => {
		setEmail(value);
	};

	const handlePasswordChange = (
		_event: React.FormEvent<HTMLInputElement>,
		value: string
	) => {
		setPassword(value);
	};

	const onLoginButtonClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		setIsValidEmail(!!email);
		setIsValidPassword(!!password);
		const isFormInvalid = !email || !password;
		setShowHelperText(isFormInvalid);
		if (!isFormInvalid) {
			const formData = {
				email,
				password,
			};
		}
	};

	const signUpForAccountMessage = (
		<LoginMainFooterBandItem>
			Вы не зарегистрированны?{" "}
			<Link to="/auth/register">Зарегистрироваться.</Link>
		</LoginMainFooterBandItem>
	);

	const loginForm = (
		<LoginForm
			showHelperText={showHelperText}
			helperText="Неверно введены данные."
			helperTextIcon={<ExclamationCircleIcon />}
			usernameLabel="Эл. почта"
			usernameValue={email}
			onChangeUsername={handleUsernameChange}
			isValidUsername={isValidEmail}
			passwordLabel="Пароль"
			passwordValue={password}
			onChangePassword={handlePasswordChange}
			isValidPassword={isValidPassword}
			onLoginButtonClick={onLoginButtonClick}
			loginButtonLabel="Войти"
		/>
	);

	return (
		<PatternFlyLoginPage
			loginTitle="Вход"
			loginSubtitle="Введите необходимые данные, чтобы войти как администатор или пользователь."
			signUpForAccountMessage={signUpForAccountMessage}
		>
			{loginForm}
		</PatternFlyLoginPage>
	);
}
