// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  localIcons: true,
  temperature: {
    location: "Kolkata",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "LLMS",
          links: [
            {
              name: "chatGPT",
              url: "https://chat.openai.com/chat",
              icon: "brand-openai",
              icon_color: palette.maroon,
            },
            {
              name: "preplexity",
              url: "https://preplexity.ai",
              icon: "brand-figma",
              icon_color: palette.blue,
            },
            {
              name: "deepseek",
              url: "https://chat.deepseek.com",
              icon: "robot",
              icon_color: palette.peach,
            },
            {
              name: "Gemini AI",
              url: "https://gemini.google.com/app",
              icon: "brain",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.peach,
            },
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.blue,
            },
            {
              name: "MSOffice",
              url: "https://www.microsoft365.com/?auth=1",
              icon: "brand-windows",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com",
              icon: "brand-google-drive",
              icon_color: palette.green,
            },
            {
              name: "lofi-music",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "college",
          links: [
            {
              name: "My-Dashboard",
              url: "https://ignou.samarth.edu.in/index.php/dashboard",
              icon: "chalkboard",
              icon_color: palette.green,
            },
            {
              name: "IGNOU",
              url: "https://ignouadmission.samarth.edu.in/index.php/app/my/applications",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "DU",
              url: "https://slc.uod.ac.in/index.php/dashboard",
              icon: "settings-automation",
              icon_color: palette.red,
            },
            {
              name: "e-GyanKosh",
              url: "https://egyankosh.ac.in/handle/123456789/72354",
              icon: "book-2",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "books",
          links: [
            {
              name: "Rust-book",
              url: "https://doc.rust-lang.org/book/title-page.html",
              icon: "brand-rust",
              icon_color: palette.red,
            },
            {
              name: "go-Book",
              url: "https://www.golang-book.com/books/intro",
              icon: "brand-golang",
              icon_color: palette.blue,
            },
            {
              name: "Modern JS",
              url: "https://javascript.info/",
              icon: "brand-javascript",
              icon_color: palette.yellow,
            },
            {
              name: "web.dev",
              url: "https://web.dev/?authuser=2",
              icon: "brand-google-home",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "courses",
          links: [
            {
              name: "Udemy",
              url: "https://www.udemy.com",
              icon: "building-bank",
              icon_color: palette.green,
            },
            {
              name: "boot.dev",
              url: "https://www.boot.dev/tracks/backend",
              icon: "terminal-2",
              icon_color: palette.maroon,
            },
            {
              name: "A2Z",
              url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
              icon: "arrow-badge-up",
              icon_color: palette.peach,
            },
            {
              name: "Frontend Master",
              url: "https://frontendmasters.com/courses/algorithms",
              icon: "stack",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "Guide",
          links: [
            {
              name: "QuickRef",
              url: "https://quickref.me/",
              icon: "currency-quetzal",
              icon_color: palette.green,
            },
            {
              name: "Gooogle-for-devs",
              url: "https://developers.google.com/?authuser=2",
              icon: "brand-google",
              icon_color: palette.blue,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "roadmap",
              url: "https://roadmap.sh/",
              icon: "map-cog",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "animanga",
          links: [
            {
              name: "manga",
              url: "https://mangareader.to/home",
              icon: "brand-medium",
              icon_color: palette.green,
            },
            {
              name: "manga+",
              url: "https://mangaplus.shueisha.co.jp/updates",
              icon: "location-plus",
              icon_color: palette.peach,
            },
            {
              name: "aniwatch",
              url: "https://aniwatchtv.to/home",
              icon: "alpha",
              icon_color: palette.red,
            },
            {
              name: "crunchyroll",
              url: "https://www.crunchyroll.com",
              icon: "brand-revolut",
              icon_color: palette.blue,
            },
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "stream",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "Movies",
              url: "https://hurawatch.cc/home",
              icon: "video",
              icon_color: palette.peach,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.blue,
            },
            {
              name: "Hotstar",
              url: "https://www.hotstar.com/in/home",
              icon: "brand-disney",
              icon_color: palette.green,
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "social",
          links: [
            {
              name: "github",
              url: "https://github.com/xshubhamg",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "reddit",
              url: "https://reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "twitter",
              url: "https://x.com/home",
              icon: "brand-twitter",
              icon_color: palette.red,
            },
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com",
              icon: "brand-whatsapp",
              icon_color: palette.blue,
            },
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.yellow,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
