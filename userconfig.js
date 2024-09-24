// latte / frappe / macchiato / mocha
const palette = mocha

const default_config = {
  overrideStorage: true,
  localIcons: true,
  temperature: {
    location: 'Kolkata',
    scale: 'C',
  },
  clock: {
    format: 'h:i p',
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: 'https://app.raindrop.io',
  openLastVisitedTab: true,
  tabs: [
    {
      name: 'myself',
      background_url: 'src/img/banners/cbg-9.gif',
      categories: [
        {
          name: 'bookmarks',
          links: [
            {
              name: 'raindrop',
              url: 'https://app.raindrop.io',
              icon: 'droplet-bolt',
              icon_color: palette.green,
            },
            {
              name: 'musicForProgramming();',
              url: 'https://musicforprogramming.net',
              icon: 'binary-tree',
              icon_color: palette.peach,
            },
            {
              name: 'chatGPT',
              url: 'https://chat.openai.com/chat',
              icon: 'brand-whatsapp',
              icon_color: palette.maroon,
            },
          ],
        },
        {
          name: 'workspace',
          links: [
            {
              name: 'gmail',
              url: 'https://mail.google.com',
              icon: 'brand-gmail',
              icon_color: palette.green,
            },
            {
              name: 'calendar',
              url: 'https://calendar.google.com',
              icon: 'calendar-filled',
              icon_color: palette.peach,
            },
            {
              name: 'MSOffice',
              url: 'https://www.microsoft365.com/?auth=1',
              icon: 'brand-windows',
              icon_color: palette.red,
            },
            {
              name: 'drive',
              url: 'https://drive.google.com',
              icon: 'brand-google-drive',
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: 'college',
          links: [
            {
              name: 'My-Dashboard',
              url: 'https://ignou.samarth.edu.in/index.php/dashboard',
              icon: 'chalkboard',
              icon_color: palette.green,
            },
            {
              name: 'IGNOU',
              url: 'https://ignouadmission.samarth.edu.in/index.php/app/my/applications',
              icon: 'badge-filled',
              icon_color: palette.peach,
            },
            {
              name: 'DU',
              url: 'https://slc.uod.ac.in/index.php/dashboard',
              icon: 'settings-automation',
              icon_color: palette.red,
            },
            {
              name: 'e-GyanKosh',
              url: 'https://egyankosh.ac.in/handle/123456789/72354',
              icon: 'book-2',
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: 'dev',
      background_url: 'src/img/banners/cbg-8.gif',
      categories: [
        {
          name: 'social',
          links: [
            {
              name: 'github',
              url: 'https://github.com/xshubhamg',
              icon: 'brand-github',
              icon_color: palette.green,
            },
            {
              name: 'reddit',
              url: 'https://reddit.com/r/unixporn',
              icon: 'brand-reddit',
              icon_color: palette.peach,
            },
            {
              name: 'twitter',
              url: 'https://x.com/home',
              icon: 'brand-twitter',
              icon_color: palette.red,
            },
            {
              name: 'whatsapp',
              url: 'https://web.whatsapp.com',
              icon: 'brand-whatsapp',
              icon_color: palette.blue,
            },
            {
              name: 'telegram',
              url: 'https://web.telegram.org',
              icon: 'brand-telegram',
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: 'resources',
          links: [
            {
              name: 'Rust-book',
              url: 'https://doc.rust-lang.org/book/title-page.html',
              icon: 'brand-rust',
              icon_color: palette.red,
            },
            {
              name: 'go-Book',
              url: 'https://www.golang-book.com/books/intro',
              icon: 'brand-golang',
              icon_color: palette.blue,
            },
            {
              name: 'Modern JS',
              url: 'https://javascript.info/',
              icon: 'brand-javascript',
              icon_color: palette.yellow,
            },
            {
              name: 'A2Z',
              url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
              icon: 'arrow-badge-up',
              icon_color: palette.peach,
            },
            {
              name: 'Udemy',
              url: 'https://www.udemy.com',
              icon: 'building-bank',
              icon_color: palette.green,
            },
          ],
        },
        {
          name: 'Guide',
          links: [
            {
              name: 'QuickRef',
              url: 'https://quickref.me/',
              icon: 'currency-quetzal',
              icon_color: palette.green,
            },
            {
              name: 'hackernews',
              url: 'https://news.ycombinator.com',
              icon: 'brand-redhat',
              icon_color: palette.peach,
            },
            {
              name: 'w3schools',
              url: 'https://www.w3schools.com',
              icon: 'brand-bumble',
              icon_color: palette.red,
            },
            {
              name: 'roadmap',
              url: 'https://roadmap.sh/',
              icon: 'map-cog',
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: 'chill',
      background_url: 'src/img/banners/cbg-10.gif',
      categories: [
        {
          name: 'social medias',
          links: [
            {
              name: 'telegram',
              url: 'https://web.telegram.org',
              icon: 'brand-telegram',
              icon_color: palette.green,
            },
            {
              name: 'facebook',
              url: 'https://www.facebook.com',
              icon: 'brand-facebook',
              icon_color: palette.peach,
            },
            {
              name: 'reddit',
              url: 'https://www.reddit.com/r/unixporn',
              icon: 'brand-reddit',
              icon_color: palette.red,
            },
          ],
        },
        {
          name: 'games',
          links: [
            {
              name: 'IGN',
              url: 'https://www.ign.com/account/playlist/library',
              icon: 'device-gamepad',
              icon_color: palette.green,
            },
            {
              name: 'steam',
              url: 'https://store.steampowered.com',
              icon: 'brand-steam',
              icon_color: palette.peach,
            },
            {
              name: 'epicgames',
              url: 'https://store.epicgames.com',
              icon: 'brand-fortnite',
              icon_color: palette.red,
            },
            {
              name: 'nintendo',
              url: 'https://store.nintendo.co.uk',
              icon: 'device-nintendo',
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: 'video',
          links: [
            {
              name: 'anilist',
              url: 'https://anilist.co/home',
              icon: 'brand-funimation',
              icon_color: palette.green,
            },
            {
              name: 'youtube',
              url: 'https://www.youtube.com',
              icon: 'brand-youtube',
              icon_color: palette.peach,
            },
            {
              name: 'patreon',
              url: 'https://www.patreon.com',
              icon: 'brand-patreon',
              icon_color: palette.red,
            },
            {
              name: 'kyivstar',
              url: 'https://tv.kyivstar.ua',
              icon: 'star-filled',
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
}

const CONFIG = new Config(default_config, palette)

const root = document.querySelector(':root')
root.style.setProperty('--bg', palette.mantle)
root.style.setProperty('--accent', palette.green)
