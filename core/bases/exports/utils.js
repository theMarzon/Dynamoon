const discord = require('discord.js');

module.exports = class {

    constructor (file) {

        this.file = file;

        this.core = {

            name:    'Harley',
            version: '1.0.0',
            author:  'theMarzon',

            repository: 'https://github.com/theMarzon/Harley',

            images: {

                icon:       'https://i.ibb.co/TksS3Hf/icon.png',
                banner:     'https://i.ibb.co/BnXP1xg/banner.png',
                repository: 'https://i.ibb.co/xMqSDYh/repository.png'
            }
        };

        this.flags = {
            
            link: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g,
            nsfw: /(porn(o|))|(sex(o|))|(culo)|(put(o|a))|(pene)|(semen)|(esperma)|(cum)|(vagina)|(teta)|(hentai)|(verga)|(folla)|(viola)|(fuck)|(xxx)|(ano)|(bukake)|(pendej(o|a))|(paju(o|a))|(paj(a|earse|earme))|(mastur(bar|barte|barme|barse))/g
        };
    };
    
    /**
     * Traduce los permisos
     * @param {bigint} content
     */
    permissions (content) {

        const list = {

            [discord.PermissionsBitField.Flags.AddReactions]:            'Añadir reacciones',
            [discord.PermissionsBitField.Flags.Administrator]:           'Administrador',
            [discord.PermissionsBitField.Flags.AttachFiles]:             'Adjuntar archivos',
            [discord.PermissionsBitField.Flags.BanMembers]:              'Banear miembros',
            [discord.PermissionsBitField.Flags.ChangeNickname]:          'Cambiar apodo',
            [discord.PermissionsBitField.Flags.Connect]:                 'Conectar',
            [discord.PermissionsBitField.Flags.CreateInstantInvite]:     'Crear invitacion',
            [discord.PermissionsBitField.Flags.DeafenMembers]:           'Ensordecer miembros',
            [discord.PermissionsBitField.Flags.EmbedLinks]:              'Insertar Enlaces',
            [discord.PermissionsBitField.Flags.KickMembers]:             'Expulsar miembros',
            [discord.PermissionsBitField.Flags.ManageChannels]:          'Gestionar canales',
            [discord.PermissionsBitField.Flags.ManageEmojisAndStickers]: 'Gestionar emojis y pegatinas',
            [discord.PermissionsBitField.Flags.ManageGuild]:             'Gestionar servidor',
            [discord.PermissionsBitField.Flags.ManageMessages]:          'Gestionar mensajes',
            [discord.PermissionsBitField.Flags.ManageNicknames]:         'Gestionar apodos',
            [discord.PermissionsBitField.Flags.ManageRoles]:             'Gestionar roles',
            [discord.PermissionsBitField.Flags.ManageThreads]:           'Gestionar hilos',
            [discord.PermissionsBitField.Flags.ManageWebhooks]:          'Gestionar webhooks',
            [discord.PermissionsBitField.Flags.MentionEveryone]:         'Mencionar @everyone, @here y todos los roles',
            [discord.PermissionsBitField.Flags.MoveMembers]:             'Mover miembros',
            [discord.PermissionsBitField.Flags.MuteMembers]:             'Silenciar miembros',
            [discord.PermissionsBitField.Flags.PrioritySpeaker]:         'Prioridad de palabra',
            [discord.PermissionsBitField.Flags.ReadMessageHistory]:      'Leer el historial de mensajes',
            [discord.PermissionsBitField.Flags.RequestToSpeak]:          'Solicitar hablar',
            [discord.PermissionsBitField.Flags.SendMessages]:            'Enviar mensajes',
            [discord.PermissionsBitField.Flags.SendTTSMessages]:         'Enviar mensajes de texto a voz',
            [discord.PermissionsBitField.Flags.Speak]:                   'Hablar',
            [discord.PermissionsBitField.Flags.Stream]:                  'Video',
            [discord.PermissionsBitField.Flags.UseApplicationCommands]:  'User comandos de barra diagonal',
            [discord.PermissionsBitField.Flags.UseExternalEmojis]:       'Usar emojis externos',
            [discord.PermissionsBitField.Flags.UseExternalStickers]:     'User pagatinas externas',
            [discord.PermissionsBitField.Flags.UseVAD]:                  'Usar actividad de voz',
            [discord.PermissionsBitField.Flags.ViewAuditLog]:            'Ver el registro de auditoria',
            [discord.PermissionsBitField.Flags.ViewChannel]:             'Ver canales',
            [discord.PermissionsBitField.Flags.ViewGuildInsights]:       'Ver informacion del servidor',
            [discord.PermissionsBitField.Flags.ManageEvents]:            'Gestionar eventos',
            [discord.PermissionsBitField.Flags.CreatePublicThreads]:     'Crear hilos publicos',
            [discord.PermissionsBitField.Flags.CreatePrivateThreads]:    'Crear hilos privados',
            [discord.PermissionsBitField.Flags.SendMessagesInThreads]:   'Enviar mensajes en hilos',
            [discord.PermissionsBitField.Flags.StartEmbeddedActivities]: 'Empezar actividades',
            [discord.PermissionsBitField.Flags.ModerateMembers]:         'Aislar temporalmente a miembros'
        };

        // Si es Bigint
        if (typeof content === 'bigint') return list[content];
    
        // Si es Array
        if (Array.isArray(content)) return content.map((val) => this.permissions(val));
    
        // Si no coincide con nada 
        return null;
    };

    /**
     * Verifica si contiene URLs
     * @param {string} content
     */
    link (content) {

        // Si es String
        if (typeof content === 'string') return this.flags.link.test(content.toLowerCase());

        // Si no coincide con nada 
        return null;
    };

    /**
     * Verifica si contiene nsfw
     * @param {string} content
     */
    nsfw (content) {

        // Si es String
        if (typeof content === 'string') return this.flags.nsfw.test(content.toLowerCase());
    
        // Si no coincide con nada
        return null;
    };
};