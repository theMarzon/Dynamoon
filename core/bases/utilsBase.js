const discord = require('discord.js');

module.exports = class {

    constructor (file) {

        this.file = file;

        this.core = {

            name:    'DisCore',
            version: '0.3.0',

            repository: 'https://github.com/theMarzon/DisCore',

            images: {

                banner: 'https://i.ibb.co/gdzFQw5/banner.png',
                icon:   'https://i.ibb.co/Kqj0WwZ/icon.png',
                logo:   'https://i.ibb.co/JFrJgNS/logo.png'
            }
        };

        this.flags = {
            
            link: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g,
            nsfw: /(porn(o|))|(sex(o|))|(culo)|(put(o|a))|(pene)|(semen)|(esperma)|(cum)|(vagina)|(teta)|(hentai)|(verga)|(folla)|(viola)|(fuck)|(xxx)|(ano)|(bukake)|(pendej(o|a))|(paju(o|a))|(paj(a|earse|earme))|(mastur(bar|barte|barme|barse))/g
        };
    };
    
    /**
     * Traduce los permisos
     * @param {bigint | bigint[]} value
     */
    toSpanish (value) {

        const permissions = {
    
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

        // Bigint
        if (typeof value === 'bigint') return permissions[value];

        // Array
        if (Array.isArray(value)) return value.map((val) => this.toSpanish(val));

        throw new Error('Only bigints or arrays of bigints');
    };

    /**
     * Verifica si contiene enlaces
     * @param {string | string[]} value
     */
    isLink (value) {

        // String
        if (typeof value === 'string') return this.flags.link.test(value);

        // Array
        if (Array.isArray(value)) return value.map((val) => this.isLink(val)).includes(true);

        throw new Error('Only strings or arrays of strings');
    };

    /**
     * Verifica si contiene nsfw
     * @param {string | string[]} value
     */
    isNsfw (value) {

        // String
        if (typeof value === 'string') return this.flags.nsfw.test(value);

        // Array
        if (Array.isArray(value)) return value.map((val) => this.isNsfw(val)).includes(true);

        throw new Error('Only strings or arrays of strings');
    };
};