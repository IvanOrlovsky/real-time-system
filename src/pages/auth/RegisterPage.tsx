import { Fragment, useState } from "react";
import {
	FormGroup,
	LoginForm,
	LoginMainFooterBandItem,
	LoginPage,
	TextInput,
} from "@patternfly/react-core";
import ExclamationCircleIcon from "@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon";
import { Link } from "react-router";

export default function RegisterPage() {
	const [showHelperText, setShowHelperText] = useState(false);
	const [email, setEmail] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [password, setPassword] = useState("");
	const [isValidPassword, setIsValidPassword] = useState(true);
	const [token, setToken] = useState("");
	const [isValidToken, setIsValidToken] = useState<"default" | "error">(
		"default"
	);

	const handleEmailChange = (
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

	const handleTokenChange = (
		_event: React.FormEvent<HTMLInputElement>,
		value: string
	) => {
		setToken(value);
	};

	const onLoginButtonClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();
		setIsValidEmail(!!email);
		setIsValidPassword(!!password);
		setIsValidToken(!!token ? "default" : "error");
		const isFormInvalid = !email || !password || !token;
		setShowHelperText(isFormInvalid);
		if (!isFormInvalid) {
			const formData = {
				email,
				password,
				token,
			};
		}
	};

	const signUpForAccountMessage = (
		<LoginMainFooterBandItem>
			Вы уже зарегистрированны? <Link to="/auth/login">Войти.</Link>
		</LoginMainFooterBandItem>
	);

	const loginForm = (
		<LoginForm
			showHelperText={showHelperText}
			helperText="Неверно введены данные."
			helperTextIcon={<ExclamationCircleIcon />}
			usernameLabel="Эл. почта"
			usernameValue={email}
			onChangeUsername={handleEmailChange}
			isValidUsername={isValidEmail}
			passwordLabel="Пароль"
			passwordValue={password}
			onChangePassword={handlePasswordChange}
			isValidPassword={isValidPassword}
			isShowPasswordEnabled
			onLoginButtonClick={onLoginButtonClick}
			loginButtonLabel="Войти"
		/>
	);

	return (
		<LoginPage
			loginTitle="Регистрация"
			loginSubtitle="Введите необходимые данные, чтобы зарегистрироваться как администатор системы."
			signUpForAccountMessage={signUpForAccountMessage}
		>
			<FormGroup
				label="Токен"
				fieldId="token"
				isRequired
				style={{ marginBottom: "1rem", gap: "8px" }}
			>
				<TextInput
					id="token"
					value={token}
					isRequired
					validated={isValidToken}
					onChange={handleTokenChange}
				/>
			</FormGroup>
			{loginForm}
		</LoginPage>
	);
}
