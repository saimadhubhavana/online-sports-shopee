const UserValidation = {
    UserId: {
        rules: [
          {
            test: (value) => {
              return value.length > 0;
            },
            message: 'UserNumber should be greater than 0 digits',
          },
          {
              test: /^[0-9]*$/,
              message: 'User Number must contain only numeric digit',
            },
        ],
        errors: [],
        valid: false,
        state: ''
      },
    username: {
      rules: [
        {
          test: /^[a-zA-Z ]*$/+/^[0-9]*$/,
          message: 'User Name must contain only alphabets and numbers',
        },
        {
          test: (value) => {
            return value.length > 3;
          },
          message: 'User Name must be longer than three characters',
        },
        {
          test: (value) => {
            return value.length < 20;
          },
          message: 'User Name cannot be longer than twenty characters',
        },
      ],
      errors: [],
      valid: false,
      state: '',
    },
    password: {
        rules: [
          {
            test: /^[a-zA-Z ]*$/+/^[0-9]*$/+/^[!@#&$]*$/,
            message: 'password must contain only alphabets, numbers and special characters',
          },
          {
            test: (value) => {
              return value.length > 3;
            },
            message: 'Password must be longer than three characters',
          },
          {
            test: (value) => {
              return value.length < 20;
            },
            message: 'Password cannot be longer than twenty characters',
          },
        ],
        errors: [],
        valid: false,
        state: '',
      },
  };
  
  export default UserValidation;