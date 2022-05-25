import discord from 'discord.js';

export class ToolsBuilder {

    constructor (fileContent) {

        this.file = fileContent;

        this.engine = {

            name:    'Dinamoon',
            version: '0.5.0',

            repository: 'https://github.com/theMarzon/Dinamoon',

            images: {

                banner: 'https://i.ibb.co/ZNwcYYH/banner.png',
                icon:   'https://i.ibb.co/S56zQ17/icon.png',
                logo:   'https://i.ibb.co/02kJWXt/logo.png'
            }
        };

        this.flags = {
            
            link: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g,
            nsfw: /(porn(o|))|(sex(o|))|(culo)|(put(o|a))|(pene)|(semen)|(esperma)|(cum)|(vagina)|(teta)|(hentai)|(verga)|(folla)|(viola)|(fuck)|(xxx)|(ano)|(bukake)|(pendej(o|a))|(paju(o|a))|(paj(a|earse|earme))|(mastur(bar|barte|barme|barse))/g
        };
    };
    
    toSpanish (value) {

        const permissionsList = {
    
            [discord.PermissionFlagsBits.AddReactions]:            'Añadir reacciones',
            [discord.PermissionFlagsBits.Administrator]:           'Administrador',
            [discord.PermissionFlagsBits.AttachFiles]:             'Adjuntar archivos',
            [discord.PermissionFlagsBits.BanMembers]:              'Banear miembros',
            [discord.PermissionFlagsBits.ChangeNickname]:          'Cambiar apodo',
            [discord.PermissionFlagsBits.Connect]:                 'Conectar',
            [discord.PermissionFlagsBits.CreateInstantInvite]:     'Crear invitacion',
            [discord.PermissionFlagsBits.DeafenMembers]:           'Ensordecer miembros',
            [discord.PermissionFlagsBits.EmbedLinks]:              'Insertar Enlaces',
            [discord.PermissionFlagsBits.KickMembers]:             'Expulsar miembros',
            [discord.PermissionFlagsBits.ManageChannels]:          'Gestionar canales',
            [discord.PermissionFlagsBits.ManageEmojisAndStickers]: 'Gestionar emojis y pegatinas',
            [discord.PermissionFlagsBits.ManageGuild]:             'Gestionar servidor',
            [discord.PermissionFlagsBits.ManageMessages]:          'Gestionar mensajes',
            [discord.PermissionFlagsBits.ManageNicknames]:         'Gestionar apodos',
            [discord.PermissionFlagsBits.ManageRoles]:             'Gestionar roles',
            [discord.PermissionFlagsBits.ManageThreads]:           'Gestionar hilos',
            [discord.PermissionFlagsBits.ManageWebhooks]:          'Gestionar webhooks',
            [discord.PermissionFlagsBits.MentionEveryone]:         'Mencionar @everyone, @here y todos los roles',
            [discord.PermissionFlagsBits.MoveMembers]:             'Mover miembros',
            [discord.PermissionFlagsBits.MuteMembers]:             'Silenciar miembros',
            [discord.PermissionFlagsBits.PrioritySpeaker]:         'Prioridad de palabra',
            [discord.PermissionFlagsBits.ReadMessageHistory]:      'Leer el historial de mensajes',
            [discord.PermissionFlagsBits.RequestToSpeak]:          'Solicitar hablar',
            [discord.PermissionFlagsBits.SendMessages]:            'Enviar mensajes',
            [discord.PermissionFlagsBits.SendTTSMessages]:         'Enviar mensajes de texto a voz',
            [discord.PermissionFlagsBits.Speak]:                   'Hablar',
            [discord.PermissionFlagsBits.Stream]:                  'Video',
            [discord.PermissionFlagsBits.UseApplicationCommands]:  'User comandos de barra diagonal',
            [discord.PermissionFlagsBits.UseExternalEmojis]:       'Usar emojis externos',
            [discord.PermissionFlagsBits.UseExternalStickers]:     'User pagatinas externas',
            [discord.PermissionFlagsBits.UseVAD]:                  'Usar actividad de voz',
            [discord.PermissionFlagsBits.ViewAuditLog]:            'Ver el registro de auditoria',
            [discord.PermissionFlagsBits.ViewChannel]:             'Ver canales',
            [discord.PermissionFlagsBits.ViewGuildInsights]:       'Ver informacion del servidor',
            [discord.PermissionFlagsBits.ManageEvents]:            'Gestionar eventos',
            [discord.PermissionFlagsBits.CreatePublicThreads]:     'Crear hilos publicos',
            [discord.PermissionFlagsBits.CreatePrivateThreads]:    'Crear hilos privados',
            [discord.PermissionFlagsBits.SendMessagesInThreads]:   'Enviar mensajes en hilos',
            [discord.PermissionFlagsBits.ModerateMembers]:         'Aislar temporalmente a miembros',
            [discord.PermissionFlagsBits.UseEmbeddedActivities]:   'Usar actividades'
        };

        // Bigint
        if (typeof value === 'bigint') return permissionsList[value];

        // Array
        if (Array.isArray(value)) return value.map(this.toSpanish);

        // None
        return null;
    };

    isLink (value) {

        // String
        if (typeof value === 'string') return this.flags.link.test(value);

        // Array
        if (Array.isArray(value)) return value.some(this.isLink);

        // None
        return null;
    };

    isNsfw (value) {

        // String
        if (typeof value === 'string') return this.flags.nsfw.test(value);

        // Array
        if (Array.isArray(value)) return value.some(this.isNsfw);

        // None
        return null;
    };
};