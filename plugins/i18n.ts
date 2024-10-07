import { createI18n } from 'vue-i18n'


const numberFormats = {
    'en': {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    'ja': {
      currency: {
        style: 'currency',
        currency: 'JPY',
        currencyDisplay: 'symbol'
      }
    }
  }
export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ja',
    fallbackLocale: 'en',
    messages: {
        en: {
            SelectContentType: "Select content type",
            IOwnThis: "I own this",
            Comments: "Comments",
            MoreBlogs: "More blogs",
            MoreNews: "More News",
            Unfollow: "Unfollow",
            TraineesFollowingYou: "Trainees following you",
            TraineesYoureFollowing:  "Trainees you are following",
            MySupplement: "My Supplement",
            Blogs: "Blogs",
            DrinkList: "Drink List",
            NoSupplements: "No Supplements",
            NoWishlist: "No Wishlist",
            NoBlogs: "No Blogs",
            SupplementRegistration: 'Supplement Registration',
            Login: "Login",
            SignUp: "Sign Up",
            SearchResultFor: " Search results for ",
            SearchAgain: "Search Again",
            SupplementSearch: "Supplement Search",
            SupplementReview: "Supplement Review",
            BlogPost: "Blog Post",
            EditProfile: "Edit Profile",
            ProfileDetails: "Profile Details",
            Settings: "Settings",
            Logout: "Logout",
            Blog: "Blog",
            News: "News",
            MuscleNews: "Muscle News",
            TournamentInformation: "Tournament Information",
            FeaturedPlayers: "Featured players",
            FindSupplements: "Find supplements...",
            DidYouForgetPassword: "Did you forget your password?",
            PasswordPlaceholder: "Password",
            EmailPlaceholder: "Email",
            RequiredInput: "Required input",
            Nickname: "Nickname",
            EmailLabel: "Email address",
            PasswordLabel: "Password",
            PasswordConfirmationLabel: "Confirm password",
            InstagramAccountLabel: "Instagram ID",
            RegisterANewAccount: "Register a new account",
            ProfileChange: "Profile change",
            HeightLabel: "Height",
            BodyWeightLabel: "Body Weight",
            BodyFatPercentageLabel: "Body Fat Percentage",
            BirthDateLabel: "Date of birth",
            SexLabel: "Gender",
            ReleaseLabel: "Release",
            PrivateLabel: "Private",
            YearIStartedTrainingLabel: "A year started training",
            DeadliftLabel: "Deadlift",
            BenchPressLabel: "Bench Press",
            RespectedTraineeLabel: "Respected Person",
            SquatLabel: "Squat",
            SelfIntroduction: "Self-introduction",
            MyTraining: "My Training",
            NicknamePlaceholder: "golden hour",
            EmailRegisterPlaceholder: "{account}{'@'}{domain}",
            InstagramIdPlaceholder: "Golen_Time_Official",
            HeightPlaceholder: "174.5",
            BodyWeightPlaceholder: "87.3",
            BodyFatPlaceholder: "12.4",
            BirthDatePlaceholder: "1996/11/12",
            YearIStartedPlaceholder: "2020/11/12",
            BenchPressPlaceholder: "70",
            SquatPlaceholder: "120",
            DeadliftPlaceholder: "160",
            RespectTraineePlaceholder: "Aizawa",
            GenderPlaceholer: "male",
            GenderSelect: "Select",
            GenderMale: "Male",
            GenderFemale: "Female",
            GenderOther: "Other",
            SelfIntroPlaceholder: "I have recently become seriously addicted to muscle training.",
            MyTrainingPlaceholder: "Bench press: 5 repetitions, Squat: 30 repetitions, Deadlift: 4 repetitions",
            CreateNewButton: "Create New",
            CancelButton: "Cancel",
            ChangeButton: "Change",
            InTheEnd: "In the end",
            WhatShouldIDrink: "What should I drink?",
            CheckItNow: "Check it out now in prime time",
            DataNotAvailable: "Not registered",
            HangOn: "Hang On",
            AddTitle: "Add Title",
            AddShortDescription: "Add short description",
            CoverImage: "Cover Image",
            Browse: "Browse file...",
            BlogContentPlaceholder: "Let's write down the contents of today's training!",
            SaveDraftButton: "Save draft",
            PostButton: "Post",
            DeleteButton: "delete",
            AddImage: "add image",
            ChangeImage: "change image",
            ChangePasswordHeader: "Change Password",
            PleaseEnterYourRegisteredEmail: "Please enter your registered email address.",
            SendPasswordResetEmail: "Send password reset email",
            RegisterYourSupplement: "Register your supplement",
            BrandLabel: "Brand/Maker",
            ProductNameLabel: "Product name",
            KindsLabel: "Type of Supplement",
            ProteinContentLabel: "Protein content per 100gr",
            TypeProteinLabel: "Type of protein",
            TasteLabel: "Flavor",
            PriceLabel: "Price",
            ComponentLabel: "Ingredients",
            ShapeLabel: "Serving Type",
            UrlLabel: "URL",
            FeatureLabel: "Description of supplement",
            RegisterButton: "Register",
            SelectLabel: "Select",
            TabletOption: "tablet",
            PowderOption: "fine powder",
            CapsuleOption: "capsule",
            OthersOption: "others",
            ProteinOption: "protein",
            BCAAOption: "BCAA",
            EAAOption: "EAA",
            GlutamineOption: "glutamine",
            CreatineOption: "creatine",
            MultivitaminOption: "multivitamin",
            CitrullineOption: "citrulline",
            AgrinineOption: "agrinine",
            Omega3Option: "omega-3",
            TaurineOption: "taurine",
            CaffeineOption: "caffeine",
            AgmatineOption: "agmatine",
            PeptideOption: "peptide",
            HMBOption: "HMB",
            BrandPlaceholder: "My Protein",
            ProductNamePlaceholder: "My product name",
            FlavourPlaceholder: "vanilla",
            PricePlaceholder: "3800",
            IngredientsPlaceholder: "protein",
            UrlPlaceholder: "google.com",
            DescriptionPlaceholder: "Protein content is higher than other products",
            GoToMyAccount: "Go to my account",
            YourAccountHasBeenVerified: "Your account has been verified.",
            YourRegistrationHasBeenSuccesful: "Your registration has been successful. Email verification link has been sent to your registered email address.",
            PleaseEnterNewPassword: "Please enter the password to reset",
            NewPassword: "New Password",
            ResetPasswordTitle: "reset password",
            RateLabel: "Rate the ",
            TasteSupplementLabel: "Taste/drinkability",
            EffectSupplementLabel: "Effect",
            PostRatingLabel: "Post a rating",
            PostCommentLabel: "Post a comment",
            PostLabel: "Post",
            Replies: "replies",
            WriteAComment: "write a comment",
            ViewSupplementLabel: "View Supplement",
            MySupplementRegistration: "My Supplement Registration {count} people",
            MySupplementRegistrationNotLoggedIn: "My Supplement Registration {count} people",
            PeopleWhoWantToDrink: "{count}{' people who want to drink'}",
            EditInformation: "Edit",
            UploadYourFile: "Upload your file",
            ClickHereToUpload: "Click here to start upload",
            InsertPhoto: "Insert photo",
            ChangeFile: "Change file",
            CloseButton: "Close",
            SubmitButton: "Submit",
            InsertProfilePhoto: "Insert profile photo",
            HelloGreetings: "Hello",
            VerifyingYourAccount: "Verifying your account...",
            ErrorWrongPassword: "These credentials do not match our records.",
            LoginRequired: "Log in required",
            LoginRequiredBody: "You need to be logged in first, before do this action. Continue login?",
            ReadMoreLabel: "Read more",
            UpdateLabel: "Update",
            NoResultsFound: "No results have been found for {query}",
            ClearRefinements: "Clear all refinements",
            RatingSubmitted: "Your rating has been successfully submitted!",
            MakeSureAllFieldsHasBeenFilled: "Please make sure all required fields has been filled.",
            SupplementCreatedMsg: "Your supplement has been successfully created!",
            SupplementUpdatedMsg: "Your supplement has been successfully updated!",
            SupplemenRemovedMsg: "Your supplement has been successfully removed!",
            SupplementWishRemovedMsg: "Your supplement wish has been successfully removed.",
            SupplementWishRemovalQuestion: "are you sure you want to remove this from your drink list?",
            SupplementRemovalTitle: "Remove from your drink list.",
            CommentAddedMsg: "Your comment has been successfully added!",
            Yes: "Yes",
            Great: "Great!",
            Oops: "Oops!",         
            WelcomeBack: "Welcome back!",
            ProfileSubmittedMsg: "Your profile has been updated succesfully!",
            ResetPasswordSent: "Reset password link has been sent to your email.",
            PasswordChanged: "Your password has been changed successfully.",
            PasswordDontMatch: "Passwords do not match. Type it again",
            EmailNotVerified: "Your email address is not verified.",
            BlogCreated: "Your blog has been successfully created!",
            BlogUpdated: "Your blog has been successfully updated!",
            BlogRemoved: "Your blog has been successfully removed!",
            BlogCommentCreated: "Your blog comment has been successfully created!",
            BlogCommentUpdated: "Your blog comment has been successfully updated!",
            BlogCommentDeleted: "Your blog comment has been successfully deleted!",
            Unauthenticated: "You are not currently logged in.",
            ProblemOccured: "There's a problem on this request. Please contact the administrator.",
            CommentFieldMustNotBeEmpty: "Please make sure that the comment field isn't empty",
            GiveSomeRatings: "Please give some ratings.",
            SuccessMsg: "Great! Your changes has been saved",
            ErrorMsg: "Oops! An error has been occurred",
            Home: "Home",
            Member: "Member",
            FollowUs: "Follow Us",
            SortLowestPrice: "Lowest Price",
            SortMostRegistration: "Most Registration",
            SortHighEffectiveRate: "High effective Rate",
            SortHighEasyToConsume: "High easy to consusme Rate",
            SortLabel: "Sort label",
            NoFollowers: "No one is following you at the moment.",
            NoFollowings: "You are not following anyone at the moment."
        },
        ja: {
            SelectContentType: "コンテンツタイプを選択",
            IOwnThis: "これは私のものだ",
            Comments: "コメント",
            MoreBlogs: "その他のブログ",
            MoreNews: "その他のニュース",
            Unfollow: "フォロー解除",
            TraineesFollowingYou: "あなたをフォローしている研修生",
            TraineesYoureFollowing: "フォローしている研修生",
            MySupplement: "私のサプリメント", 
            Blogs: "ブログ",
            DrinkList: "ドリンクリスト", 
            NoSupplements: "サプリメントなし",
            NoWishlist: "ウィッシュリストなし",
            NoBlogs: "ブログはありません",
            SupplementRegistration: 'サプリ登録',
            SearchResultFor: "検索結果",
            SearchAgain: "再検索",
            Login: "ログイン",
            SignUp: "登録する",
            SupplementSearch: "サプリメント検索",
            SupplementReview: "サプリメントのレビュー",
            BlogPost: "ブログ投稿",
            EditProfile: "プロファイル編集",
            ProfileDetails: "個人プロフィール",
            Settings: "設定",
            Logout: "ログアウト",
            Blog: "ブログ",
            News: "ニュース",
            MuscleNews: "筋肉ニュース",
            TournamentInformation: "大会情報",
            FeaturedPlayers: "注目選手",
            FindSupplements: "検索",
            DidYouForgetPassword: "パスワードをお忘れの方はこちら",
            PasswordPlaceholder: "パスワード",
            EmailPlaceholder: "メールアドレス",
            RequiredInput: "必須入力",
            Nickname: "ニックネーム",
            EmailLabel: "メールアドレス",
            PasswordLabel: "パスワード",
            PasswordConfirmationLabel: "パスワード確認",
            InstagramAccountLabel: "Instagram ID",
            RegisterANewAccount: "新しいアカウントを登録する",
            ProfileChange: "プロフィールの変更",
            HeightLabel: "身長",
            BodyWeightLabel: "体重",
            BodyFatPercentageLabel: "体脂肪",
            BirthDateLabel: "生年月日",
            SexLabel: "性別",
            ReleaseLabel: "公開",
            PrivateLabel: "非公開",
            YearIStartedTrainingLabel: "トレーニング開始年月",
            DeadliftLabel: "デッドリフト",
            BenchPressLabel: "ベンチプレス",
            RespectedTraineeLabel: "尊敬するトレーニー",
            SquatLabel: "スクワット",
            SelfIntroduction: "自己紹介",
            MyTraining: "マイトレーニング",
            NicknamePlaceholder: "ゴールデンタイム",
            EmailRegisterPlaceholder: "{account}{'@'}{domain}",
            InstagramIdPlaceholder: "Golen_Time_Official",
            HeightPlaceholder: "174.5",
            BodyWeightPlaceholder: "87.3",
            BodyFatPlaceholder: "12.4",
            BirthDatePlaceholder: "1996/11/12",
            YearIStartedPlaceholder: "2020/11/12",
            BenchPressPlaceholder: "70",
            SquatPlaceholder: "120",
            DeadliftPlaceholder: "160",
            RespectTraineePlaceholder: "相澤選手",
            GenderPlaceholer: "男性",
            GenderSelect: "選択",
            GenderMale: "男",
            GenderFemale: "女",
            GenderOther: "未回答",
            SelfIntroPlaceholder: "最近筋トレに本格的にはまっています。",
            MyTrainingPlaceholder: "ベンチプレス：5回、スクワット：30回、デットリフト：4回",
            CreateNewButton: "新しく作る",
            CancelButton: "キャンセル",
            ChangeButton: "更新",
            InTheEnd: "結局",
            WhatShouldIDrink: "何飲めば良いの？",
            CheckItNow: "今すぐプライムタイムでチェック",
            HangOn: "...",
            AddTitle: "タイトル",
            AddShortDescription: "短い説明を追加",
            CoverImage: "表紙画像",
            Browse: "ファイルをブラウズ...",
            BlogContentPlaceholder: "脚トレーニングこそ筋トレの醍醐味",
            SaveDraftButton: "保存",
            PostButton: "ポスト",
            DeleteButton: "削除",
            AddImage: "画像を追加",
            ChangeImage: "画像を更新する",
            ChangePasswordHeader: "パスワードを変更する",
            PleaseEnterYourRegisteredEmail: "ご登録済みのメールアドレスを入力してください。",
            SendPasswordResetEmail: "パスワードリセットメールを送信する",
            RegisterYourSupplement: "サプリメントを登録する",
            BrandLabel: "ブランド",
            ProductNameLabel: "商品名",
            KindsLabel: "種類",
            ProteinContentLabel: "100gあたりのタンパク質含有量",
            TypeProteinLabel: "タンパク質の種類",
            TasteLabel: "味",
            PriceLabel: "価格",
            ComponentLabel: "成分",
            ShapeLabel: "形状",
            UrlLabel: "商品URL",
            FeatureLabel: "製品の特長",
            RegisterButton: "登録",
            SelectLabel: "選択",
            TabletOption: "タブレット",
            PowderOption: "粉末",
            CapsuleOption: "カプセル",
            OthersOption: "その他",
            ProteinOption: "プロテイン",
            BCAAOption: "BCAA",
            EAAOption: "EAA",
            GlutamineOption: "グルタミン",
            CreatineOption: "クレアチン",
            MultivitaminOption: "マルチビタミン",
            CitrullineOption: "シトルリン",
            AgrinineOption: "アルギニン",
            Omega3Option: "オメガ３",
            TaurineOption: "タウリン",
            CaffeineOption: "カフェイン",
            AgmatineOption: "アグマチン",
            PeptideOption: "ペプチド",
            HMBOption: "HMB",
            BrandPlaceholder: "マイプロテイン",
            ProductNamePlaceholder: "製品名",
            FlavourPlaceholder: "バニラ",
            PricePlaceholder: "3800",
            IngredientsPlaceholder: "タンパク質",
            UrlPlaceholder: "google.com",
            DescriptionPlaceholder: "プロテイン含有量が他の商品に比べて多い",
            GoToMyAccount: "マイアカウントへ移動します",
            YourAccountHasBeenVerified: "アカウントが承認されました。",
            YourRegistrationHasBeenSuccesful: "登録したメールアドレスにメール認証リンクを送付致しました。",
            PleaseEnterNewPassword: "新しいパスワードを入力してください。",
            NewPassword: "新しいパスワード",
            ResetPasswordTitle: "パスワードのリセット",
            RateLabel: "評価する",
            TasteSupplementLabel: "味/飲みやすさ",
            EffectSupplementLabel: "効果",
            PostRatingLabel: "評価を投稿する",
            PostCommentLabel: "コメントを投稿する",
            PostLabel: "投稿",
            Replies: "件の返信",
            WriteAComment: "コメントを書く",
            ViewSupplementLabel: "サプリメントへ遷移",
            MySupplementRegistration: "{'マイサプリメント登録 '} {count}{'人'}",
            MySupplementRegistrationNotLoggedIn: "{'マイサプリメント登録 '} {count}{'人'}",
            PeopleWhoWantToDrink: "{'飲みたい登録 '} {count}{'人'}",
            EditInformation: "編集",
            UploadYourFile: "ファイルをアップロードしてください",
            ClickHereToUpload: "ここをクリックしてアップロードを開始します",
            InsertPhoto: "写真を挿入",
            ChangeFile: "変更ファイル",
            CloseButton: "閉じる",
            SubmitButton: "送信",
            InsertProfilePhoto: "プロフィール写真の挿入",
            HelloGreetings: "こんにちは",
            VerifyingYourAccount: "アカウントを確認しています...",
            ErrorWrongPassword: "パスワードが一致します。再度ご入力ください",
            LoginRequired: "ログインが必要",
            LoginRequiredBody: "この操作を行う前に、まずログインする必要があります。ログインを続けますか？",
            ReadMoreLabel: "もっと読む",
            UpdateLabel: "更新",
            NoResultsFound: "結果が見つかりませんでした {query}",
            ClearRefinements: "すべての絞り込みをクリア",
            RatingSubmitted: "評価は正常に送信されました。",
            MakeSureAllFieldsHasBeenFilled: "すべての項目をにゅうりょくしてください",
            SupplementCreatedMsg: "→サプリメントを登録しました！",
            SupplementUpdatedMsg: "→サプリメントを更新しました！",
            SupplemenRemovedMsg: "→サプリメントを削除しました！",
            SupplementWishRemovedMsg: "あなたのサプリメントの願いは正常に削除されました。",
            SupplementWishRemovalQuestion: "これを飲み物リストから削除してもよろしいですか?",
            SupplementRemovalTitle: "飲み物リストから削除してください。",
            Yes: "はい",
            CommentAddedMsg: "→コメントを投稿できました！",
            Great: "素晴らしい",
            Oops: "ユーザ登録/ログインしてください",
            WelcomeBack: "おかえりなさい",
            ProfileSubmittedMsg: "あなたのプロファイルが正常に更新されました！",
            ResetPasswordSent: "パスワードをリセットするリンクがメールに送信されました。",
            PasswordChanged: "パスワードが正常に変更されました。",
            PasswordDontMatch: "パスワードが一致していません。もう一度入力してください",
            EmailNotVerified: "あなたのメールアドレスは確認されていません。",
            DataNotAvailable: "未登録",
            BlogCreated: "ブログが正常に作成されました。",
            BlogUpdated: "ブログが正常に更新されました。",
            BlogRemoved: "ブログは正常に削除されました。",
            BlogCommentCreated: "ブログのコメントが正常に作成されました。",
            BlogCommentUpdated: "ブログのコメントが正常に更新されました",
            BlogCommentDeleted: "ブログのコメントは正常に削除されました。",
            Unauthenticated: "ログインしてください",
            ProblemOccured: "このリクエストには問題があります。管理者にお問い合わせください。",
            CommentFieldMustNotBeEmpty: "コメントが空でないことを確認してください",
            GiveSomeRatings: "評価をお願いします。",
            SuccessMsg: "素晴らしい！ 変更が保存されました",
            ErrorMsg: "おっとっと！ エラーが発生しました",
            Home: "自宅",
            Member: "会員",
            FollowUs: "接触",
            SortLowestPrice: "安い順",
            SortMostRegistration: "登録が多い順",
            SortHighEffectiveRate: "H効果順",
            SortHighEasyToConsume: "食べやすさ順",
            SortLabel: "ソートラベル",
            NoFollowers: "現時点では誰もあなたをフォローしていません。",
            NoFollowings: "あなたは現在誰もフォローしていません。"
        }
    },
    numberFormats
})

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(i18n)
})

