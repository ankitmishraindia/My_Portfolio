# My Portfolio
This is a portfolio website which contains intro, projects, contact details.

### Setup Instructions

1. Clone the Project.
```
  git clone https://github.com/ankitmishraindia/My_Portfolio
```
2. Move into the directory
```
  cd LMS-Frontend
```
3. Install Dependencies
```
  npm install
```
4. Run the Server
```
  npm run dev
```

### Tailwind Setup

[Tailwind Official instruction doc](https://tailwindcss.com/docs/installation)

1. Install Tailwindcss
```
  npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind configuration file
```
  npx tailwindcss init -p
```
3. Add file extensions to tailwind config file in content property
```
  content: ["./src/**/*.{html,js,jsx,ts,tsx}","./index.html"]
```
4. Add tailwind directives at the top of the 'index.css' file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```


  