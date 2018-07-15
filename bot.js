const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);



console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**

--------════════════ஜ۩۞۩ஜ═════════----------
---------------------•●Arab KinGs COMPANY●• ------------------
--------•═══════════════════════════•--------
•══════════ أكبر مسابقة أنفايت بتاريخ السيرفر ═════════•
--------•═══════════════════════════•--------
 •═════════════ موضوع المسابقة ═════════════•
--------•═══════════════════════════•--------
---------•═ تدخل أشخاص كتير لسيرفرنا باستخدام رابطك الشخصي ═•--------
--------•═ و لمدة أسبوعين اللي يجيب أكبر عدد لمدة أسبوعين يربح معنا ═•------
 •══════════════  الجائزة  ═══════════════•
:trophy: :scream:  بانر ولوجو ماينكرافت خورافيين و 3رندرات و 40 ألف كريديت :scream: :trophy:
--------•═══════════════════════════•--------
لو ماتبي تشارك بس افزع لي ارجوك :(
https://discord.gg/2smYN4n [ ${member}  ]
**
#########################################
**
 NITRO FREE :heart_eyes::black_heart:  
 15 INV = 20000 CREDITS
-
 20 INV = 30000 CREDITS 
-
 25 INV =   35000 CREDITS 
-
 30 INV = 2$ PayPal 
-
 50 INV = ONE NITRO 
-
 100 INV = TWO NITRO 
-
200 INV = NITRO ONE YEARS
-
 400 INV = TOW NITRO ONE YEARS
-
‎ الاستلام بــعد الوصول الى500 MEMMBER
@everyone
 كيف تخش المسابقه  :rose:
-
 تسوي رابط دائمي خاص فيك  :fire:
-
وتبدء تنشر ** :wilted_rose:

https://discord.gg/JPK6f3k **
###############################################


**مرحبا ! 
هناك مسابقة في سيرفرنا كريستال 
وانا متسابق رقم 15 !
ذان همم ؟
ماهي جوائز 
__مركز الاول__
:red_circle:  - حساب هايب سكواد وا 200 الف كريدت !!!
__مركز ثاني__
:large_blue_circle: -  نيترو + 100 الف كريدت + بوت موسيقى دائم 24 ساعة
__مزكز الثالث__
:white_circle: - نيترو + حساب تاق مميز
__مركز الرابع__
:black_circle: - 100 الف كريدت
لي تعرف اكثر على مسابقة 
رجاء دخول هذا رابط
واذا دخلت له لك 1 الف كريدت 
اذا دخلت وصوتت كلم **
<@452785037511753728>
لي اجل استلام
**رابط تصويت لنا https://discord.gg/BJ4Xfng **
**ادخل صوت يا قلبي ترا ماخسران شي ولله :hearts: **
لاتنسى 1 الف كريدت لو تصوت لي







`) 
}).catch(console.error)
})
