Here’s the translated version of your content with Chinese text replaced by English:

---

<p align="center">
	<img alt="logo" src="https://github.com/huanghanzhilian/huanghanzhilian/raw/main/projects/c-shopping-rn.svg" width="300">
</p>
<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">C-Shopping-RN APP</h1>
<h4 align="center">This is a complete app developed with React Native (Expo), a beautifully designed e-commerce shopping application.</h4>

## README.md

- en [English](README.md)
- zh_CN [Simplified Chinese](README.zh_CN.md)

## Technologies Used

- React Native
- Redux Toolkit
- RTK Query
- Expo Router
- NativeWind

## Introduction

`c-shopping-rn` is a beautifully designed e-commerce app with an elegant interface, rich features, and fast performance. It includes a complete MVP functionality for an e-commerce platform, with excellent aesthetic design and coding structure.

The project's data API comes from the [c-shopping](https://github.com/huanghanzhilian/c-shopping) Next.js open-source project.

Project Portal: [https://github.com/huanghanzhilian/c-shopping](https://github.com/huanghanzhilian/c-shopping)

We hope that everyone who comes here gains something valuable. The story never ends, and youth never fades.

## Project Overview

**Background:**

- Front-end UI frameworks have long been dominated by fixed patterns (limited by traditional UI frameworks), leading to visual fatigue. When developing highly customized projects, it often feels overwhelming.
- There are few excellent web projects that adapt well to multiple devices, resulting in high learning and maintenance costs.
- As projects grow in complexity, managing multiple APIs within components becomes challenging. For example, managing multiple loading and error states can lead to excessive state declarations, and issues like request cancellation and race conditions are often overlooked.
- As projects grow, the development and maintenance of styles become bulky and cumbersome.

**Intent:**

To address the issues mentioned in the background.

**Goal:**

To create a complete and well-suited ecosystem for web development.

## Project Demo

| Module | Loading                                                                                        | Skeleton                                                                                       | Success                                                                                        | Error or Empty                                                                                 |
| ------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Feed   | ![](https://public.huanghanlian.com/blog/article/e1f91a01-bf5e-46f4-8cbd-7f485e5039ba.png) | ![](https://public.huanghanlian.com/blog/article/d09fc3af-1bf7-49fa-8957-227a3add172a.png) | ![](https://public.huanghanlian.com/blog/article/efee1d79-9c95-4be5-9a6a-ec5160b7e6ae.png) | ![](https://public.huanghanlian.com/blog/article/c3d29b64-c6be-4716-8b4d-30becfbe4246.png) |

| Module   | Loading                                                                                        | Success                                                                                        | Empty                                                                                          | Error                                                                                          |
| -------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Category | ![](https://public.huanghanlian.com/blog/article/5d6451e5-1a71-472d-851d-08049a37df9e.png) | ![](https://public.huanghanlian.com/blog/article/302d74e3-b4ef-4d90-87b7-e57d9217caa2.png) | ![](https://public.huanghanlian.com/blog/article/b164744f-a5cd-4f9c-a3a5-b0b33b90b82d.png) | ![](https://public.huanghanlian.com/blog/article/06c64210-4f8e-4b43-9f1d-9b5c1b2748a4.png) |

| Module                | Loading and Skeleton                                                                           | Level 1                                                                                        | Level 2                                                                                        | Level 3                                                                                        | Filter                                                                                         | Sort                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Classification Subset | ![](https://public.huanghanlian.com/blog/article/be7d64db-496d-442f-a1e6-ae7d42e9b628.png) | ![](https://public.huanghanlian.com/blog/article/3be1701c-ed03-4394-984a-9ff9b67dd111.png) | ![](https://public.huanghanlian.com/blog/article/44c1ac35-c6a6-4736-8c49-2a030afe14c8.png) | ![](https://public.huanghanlian.com/blog/article/f54cdf46-72c0-42bc-ade2-9c3df96cd121.png) | ![](https://public.huanghanlian.com/blog/article/e4733e24-fa72-4ee0-9c33-c0dbc8072594.png) | ![](https://public.huanghanlian.com/blog/article/0229b9d8-4785-48fb-9028-f7a00cdccfca.png) |

| Module          | Loading and Skeleton                                                                           | Normal Screen 1                                                                                | Normal Screen 2                                                                                | Error                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Product Details | ![](https://public.huanghanlian.com/blog/article/08946a24-197c-4fc0-9a44-0950621f90b7.png) | ![](https://public.huanghanlian.com/blog/article/43a51e87-8775-41b8-a6a4-519e256015e4.png) | ![](https://public.huanghanlian.com/blog/article/fc28819a-456c-4a50-822b-1fa395198b66.png) | ![](https://public.huanghanlian.com/blog/article/a066c4c3-ebf1-460e-91c1-ad5431f04cb9.png) |

| Module         | Comment Section                                                                                | Click to Verify Login                                                                          | Fill in the Comments                                                                           | Submit Comment Error                                                                           | Comment Submitted Successfully                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Product Review | ![](https://public.huanghanlian.com/blog/article/031b85f9-db43-49b6-9f1b-13209b9bb7ef.png) | ![](https://public.huanghanlian.com/blog/article/b07813d7-bf0d-4fe5-80d7-625dd561e4a4.png) | ![](https://public.huanghanlian.com/blog/article/d8048925-dca5-4330-a753-69e3af19bcd3.png) | ![](https://public.huanghanlian.com/blog/article/e935116f-1ab4-4877-90f0-dac66031f0b9.png) | ![](https://public.huanghanlian.com/blog/article/26faa410-3b6a-4882-9373-9992843f6d7e.png) |

| Module | Not Logged In                                                                                  | Data is Empty                                                                                  | Screen 1                                                                                       | Screen 2                                                                                       | Add to Cart                                                                                |
| ------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Cart   | ![](https://public.huanghanlian.com/blog/article/64a07f64-96fd-4129-9a75-a27cc681e839.png) | ![](https://public.huanghanlian.com/blog/article/4a00d6af-a0f0-42e8-8e3b-ed44464cb5da.png) | ![](https://public.huanghanlian.com/blog/article/cee4592d-16e1-4836-8d91-6c79608c1eec.png) | ![](https://public.huanghanlian.com/blog/article/ed79f4cf-db93-4c12-beeb-66503ef31810.png) | ![](https://public.huanghanlian.com/blog/article/20f87dfc-7b5f-4109-8098-0e26db8c8b57.png) |

| Module  | Shopping Cart to Pay                                                                           | Confirm Payment                                                                                | Payment Successful                                                                             |
| ------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Payment | ![](https://public.huanghanlian.com/blog/article/7f1ce096-7624-4102-9e64-ec562693ee42.png) | ![](https://public.huanghanlian.com/blog/article/33b2435e-5146-425c-a514-c8ab725909f6.png) | ![](https://public.huanghanlian.com/blog/article/bd619f57-6f04-44e8-94ac-ccb3a752dc6a.png) |

| Module  | Not Logged In                                                                                  | After Logging In                                                                               | After Logging Out                                                                              |
| ------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Profile | ![](https://public.huanghanlian.com/blog/article/619b8402-79b6-442a-8fed-62763b4163e6.png) | ![](https://public.huanghanlian.com/blog/article/b30c1355-3f4f-47de-8087-7a7e7e55e451.png) | ![](https://public.huanghanlian.com/blog/article/a37a6421-784d-441f-aa8c-c3212654bc4e.png) |

| Module                | A Page That Requires Login                                                                     | Before the Button Logic, You Need to Verify Whether You Are Logged In and After Entering the Page, You Need to Verify Whether You Are Logged In and Redirect | Login Display Error                                                                            | Login Loading                                                                                  | Login Handle Response                                                                          | Register                                                                                       |
| --------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Authentication Design | ![](https://public.huanghanlian.com/blog/article/f804fc4b-e1a8-4837-8685-2d7c38ee80ed.png) | ![](https://public.huanghanlian.com/blog/article/48581171-9bcd-4154-bf36-0a87a44fc1e4.png)                                                               | ![](https://public.huanghanlian.com/blog/article/4dd13db6-7360-4faf-9be5-7fd3fa569f50.png) | ![](https://public.huanghanlian.com/blog/article/b07813d7-bf0d-4fe5-80d7-625dd561e4a4.png) | ![](https://public.huanghanlian.com/blog/article/fbbcf9d2-d75b-418d-a942-b489b9fc13fb.png) | ![](https://public.huanghanlian.com/blog/article/9ac75cc6-dd60-42f4-b8a7-ebc655f13e44.png) |

| Module      | Loading or Skeleton                                                                            | Normal Screen                                                                                  | Empty Screen                                                                                   | Error                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Orders List | ![](https://public.huanghanlian.com/blog/article/df2e2fa4-cc44-4200-8987-c9bbbff0d849.png) | ![](https://public.huanghanlian.com/blog/article/85bc15cc-fb22-4164-ad16-d5fee2e090fa.png) | ![](https://public.huanghanlian.com/blog/article/3b3d72a9-a30c-4fe0-9d84-a6a3443e9818.png) | ![](https://public.huanghanlian.com/blog/article/08c8202a-323d-476d-8255-b982ee5ba775.png) |

| Module       | Loading or Skeleton                                                                            | Normal Screen                                                                                  | Empty Screen                                                                                   | Error                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Reviews List | ![](https://public.huanghanlian.com/blog/article/421bca65-41cb-448f-a20b-52ce194fb96e.png) | ![](https://public.huanghanlian.com/blog/article/9e6945a8-fd31-4e7a-a959-8f95745d51cc.png) | ![](https://public.huanghanlian.com/blog/article/1fb3fc3b-61c4-473c-ac1c-8ad7c564c53c.png) | ![](https://public.huanghanlian.com/blog/article/13aa858f-1207-43f8-9cd6-270e7e3e44a4.png) |

| Module              | Loading or Skeleton                                                                            | Normal Screen                                                                                  | Edit and Save                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| PersonalInfo Screen | ![](https://public.huanghanlian.com/blog/article/c2709941-86e0-42e7-881e-4d44ad2bc009.png) | ![](https://public.huanghanlian.com/blog/article/ba048862-c706-4f6e-94af-18f8981e6b0c.png) | ![](https://public.huanghanlian.com/blog/article/6d892150-d74c-41e4-b704-64868eddbe29.png) |

| Module           | Loading or Skeleton                                                                            | Normal Screen                                                                                  | Empty Screen                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Addresses Screen | ![](https://public.huanghanlian.com/blog/article/cf6b9e9a-2cbd-4ac1-96e8-94e74e58564c.png) | ![](https://public.huanghanlian.com/blog/article/affe57f6-fdc3-40cf-bca5-89201081d564.png) | ![](https://public.huanghanlian.com/blog/article/ef73752f-b5f8-4ef8-8b2c-9b179c803946.png) |

| Module        | Loading or Skeleton                                                                            | Normal Screen                                                                                  | Empty Screen                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Search Screen | ![](https://public.huanghanlian.com/blog/article/f858a528-e810-4aaa-8b38-15a093ca6fc0.png) | ![](https://public.huanghanlian.com/blog/article/ce3a5199-bb02-4276-8f78-422ab41d68fd.png) | ![](https://public.huanghanlian.com/blog/article/cb818668-b4af-488a-9991-cc5923c2e915.png) |

## Running the Project

To run the c-shopping-rn React Native app locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/huanghanzhilian/c-shopping-rn.git
   ```

2. Navigate to the project directory:

   ```
   cd c-shopping-rn
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Check the contents of `.env.example`, create a new `.env` file in the project root directory, and define the required environment variables.
   ```
   EXPO_PUBLIC_BASE_URL=https://c-shopping-three.vercel.app
   ```
5. Start the app:

   ```
   npm start
   ```

6. Connect a mobile device or emulator to run the application.

## About Me

I am a technology explorer, an eager learner, and a problem solver.
<br/>
I am someone who explores technology, is eager to learn, and solves problems.

- Email: [h1319639755@gmail.com](mailto:h1319639755@gmail.com)
- Twitter: [Ji Xiaopeng](https://twitter.com/Huanghanzhilian)
- Github: [Github](https://github.com/huanghanzhilian)
- Blog: [Ji Xiaopeng](https://blog.huanghanlian.com/)
- My Chinese Channels:
  - Weibo: [Ji Xiaopeng1](https://weibo.com/u/5653497957)
  - WeChat Official Account: 「Ji Xiaopeng's Blog」
  - Juejin: [Ji Xiaopeng](https://juejin.cn/user/2119514150414686)
  - Zhihu: [Ji Xiaopeng](https://www.zhihu.com/people/huang-han-zhi-lian)
  - Jike: [Ji Xiaopeng](https://web.okjike.com/u/BA3424F7-4D6E-4A2C-BA7E-138B616EED05)
  - Bilibili: [Ji Xiaopeng](https://space.bilibili.com/191128853)

### Official Account | My WeChat

Follow the official account for more updates. Feel free to raise issues or leave messages on the official account for any suggestions or feedback. You are also welcome to add me on WeChat for discussions.

| My Official Account                                                                                                                            | My WeChat                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| <img alt="Ji Xiaopeng Official Account" src="https://public.huanghanlian.com/blog/article/4632461d-0d43-4378-bcf7-bb32bf0de950.jpeg" width="150"> | <img alt="My WeChat" src="https://public.huanghanlian.com/blog/article/6f041fb6-2141-49d8-b20b-6e989687