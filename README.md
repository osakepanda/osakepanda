## Osake panda website

### Technology:

- Simple homepage using [gatsby](https://www.gatsbyjs.org/)
- Content managed at [prismic.io](https://wwwprismic.io/)

### Credentials

- gmail, github, prismic, ifttt all have same credentials.
Consult with website owner to get them.

### Content editing:

- Login to prismic.io
- Select "osakepanda" project
- Select homepage from document list 
- Make edits
- Click "Save"
- Click "Publish"

### Publish flow:

1. Prismic publish action make a POST to ifttt.com (maker channel)
2. ifttt.com maker channel make a POST to post-forward.netlify.app/
3. netlify action make post request to github.com
4. github.com trigger build job
5. build job deploy to github pages

#### Explanations

We want to trigger github actions from prismic webhook but we cannot pass custom headers and informations to github from prismic :(
Instead, we use ifttt.com to receive prismic webhook. We cannot use ifttt.com to have custom headers, so we use [post-forward](https://github.com/y-nk/post-forward) to pass informations from ifttt to github

---

## お酒パンダのホームペーじ

### Technology:

- [gatsby](https://www.gatsbyjs.org/)で作ってるのホームページです。
- コンテントのところは[prismic.io](https://wwwprismic.io/)です。

### ロギン

- gmailとgithubとprismicとiftttが同じロギンとパスコドがある.
もらうのためにホームページのオーナーに聞いてください。

### 新しいコンテント入れる方:

- prismic.ioにロギンして
- 「osakepanda」のプロジェクトにクリクして
- ドクメントのリストに「index」のタイプのアイテムにクリクして 
- 新しいこと入れて
- 「Save」にクリクして 
- 「Publish」にクリクして 

### Publishの方 (無人端末):

1. 「Prismic」が 「Publish」にクリクしてかPOSTのリクエストをifttt.comのメカーのチャネルに送って
2. ifttt.comのメカーのチャネルがPOSTのリクエストを「post-forward」に送って
3. 「post-forward」がPOSTのリクエストを「github.com」に送って
4. 「github.com」がbuildを始めて
5. buildを終わってから、 「githubページ」にdeployして。

#### なぜその方？

ずっとただ欲しいからただのサービスだけを使うことができます。prismicはただと、かんたんのコンテナの作るのプラットホームですけど、prismicのwebhookからgithubのアクションを始めるのことができないのでiftttと[post-forward](https://github.com/y-nk/post-forward)でブリッジができてなるねです。
