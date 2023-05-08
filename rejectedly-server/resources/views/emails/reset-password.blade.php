<head>
  <style>
    body{
        background-color:#F0F0F0;
    }
    form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 6rem;
    padding: 1.5rem;
    width: 21.875rem;
    height: 25rem;
    border-radius: 3%;
    background-color: white;
    color: black;
    border: 2.5px solid #2BC45F;
    }

    input[type="email"],
    input[type="password"] {
      display: block;
      margin-bottom: 10px;
      padding: 10px;
      border:none;
      border-bottom: 2px solid #2BC45F;
      width: 80%;
      box-sizing: border-box;
      outline: none;
    }

    button[type="submit"] {
      background-color: #2BC45F;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <form action="{{ route('password.update') }}" method="POST">
    @csrf
    <h1>Reset Password</h1><br><br>
    <input type="hidden" name="token" value="{{ $token }}">
    <input type="email" name="email" placeholder="Email">
    <input type="password" name="password" placeholder="Password">
    <input type="password" name="password_confirmation" placeholder="Confirm Password">
    <br><br><button type="submit">RESET PASSWORD</button>
  </form>
</body>
