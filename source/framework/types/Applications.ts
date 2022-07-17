import discord from 'discord.js';

export type ChatApplicationOptions = {

    name: string

    priority?: number
    intents?:  number

    events?: object

    type?: discord.ApplicationCommandType

    display?: {

        dm?: boolean

        options?: discord.ApplicationCommandOptionData[]

        name?: {

            default?: string

            [discord.Locale.Bulgarian]?:    string
            [discord.Locale.ChineseCN]?:    string
            [discord.Locale.ChineseTW]?:    string
            [discord.Locale.Croatian]?:     string
            [discord.Locale.Czech]?:        string
            [discord.Locale.Danish]?:       string
            [discord.Locale.Dutch]?:        string
            [discord.Locale.EnglishGB]?:    string
            [discord.Locale.EnglishUS]?:    string
            [discord.Locale.Finnish]?:      string
            [discord.Locale.French]?:       string
            [discord.Locale.German]?:       string
            [discord.Locale.Greek]?:        string
            [discord.Locale.Hindi]?:        string
            [discord.Locale.Hungarian]?:    string
            [discord.Locale.Italian]?:      string
            [discord.Locale.Japanese]?:     string
            [discord.Locale.Korean]?:       string
            [discord.Locale.Lithuanian]?:   string
            [discord.Locale.Norwegian]?:    string
            [discord.Locale.Polish]?:       string
            [discord.Locale.PortugueseBR]?: string
            [discord.Locale.Romanian]?:     string
            [discord.Locale.Russian]?:      string
            [discord.Locale.SpanishES]?:    string
            [discord.Locale.Swedish]?:      string
            [discord.Locale.Thai]?:         string
            [discord.Locale.Turkish]?:      string
            [discord.Locale.Ukrainian]?:    string
            [discord.Locale.Vietnamese]?:   string
        }

        description?: {

            default?: string

            [discord.Locale.Bulgarian]?:    string
            [discord.Locale.ChineseCN]?:    string
            [discord.Locale.ChineseTW]?:    string
            [discord.Locale.Croatian]?:     string
            [discord.Locale.Czech]?:        string
            [discord.Locale.Danish]?:       string
            [discord.Locale.Dutch]?:        string
            [discord.Locale.EnglishGB]?:    string
            [discord.Locale.EnglishUS]?:    string
            [discord.Locale.Finnish]?:      string
            [discord.Locale.French]?:       string
            [discord.Locale.German]?:       string
            [discord.Locale.Greek]?:        string
            [discord.Locale.Hindi]?:        string
            [discord.Locale.Hungarian]?:    string
            [discord.Locale.Italian]?:      string
            [discord.Locale.Japanese]?:     string
            [discord.Locale.Korean]?:       string
            [discord.Locale.Lithuanian]?:   string
            [discord.Locale.Norwegian]?:    string
            [discord.Locale.Polish]?:       string
            [discord.Locale.PortugueseBR]?: string
            [discord.Locale.Romanian]?:     string
            [discord.Locale.Russian]?:      string
            [discord.Locale.SpanishES]?:    string
            [discord.Locale.Swedish]?:      string
            [discord.Locale.Thai]?:         string
            [discord.Locale.Turkish]?:      string
            [discord.Locale.Ukrainian]?:    string
            [discord.Locale.Vietnamese]?:   string
        }

        permissions?: {

            member?: null | discord.PermissionFlags
            bot?:    null | discord.PermissionFlags
        }
    }

    schema?: {

        name?:        string
        description?: string

        dm_permission?: boolean

        type?: discord.ApplicationCommandType

        options?: discord.ApplicationCommandOptionData[]

        default_member_permissions?: null | discord.PermissionFlags
        default_bot_permissions?:    null | discord.PermissionFlags

        name_localizations?:        object
        description_localizations?: object
    }
};

export type UserApplicationOptions = {

    name: string

    priority?: number
    intents?:  number

    events?: object

    type?: discord.ApplicationCommandType

    display?: {

        dm?: boolean

        name?: {

            default?: string

            [discord.Locale.Bulgarian]?:    string
            [discord.Locale.ChineseCN]?:    string
            [discord.Locale.ChineseTW]?:    string
            [discord.Locale.Croatian]?:     string
            [discord.Locale.Czech]?:        string
            [discord.Locale.Danish]?:       string
            [discord.Locale.Dutch]?:        string
            [discord.Locale.EnglishGB]?:    string
            [discord.Locale.EnglishUS]?:    string
            [discord.Locale.Finnish]?:      string
            [discord.Locale.French]?:       string
            [discord.Locale.German]?:       string
            [discord.Locale.Greek]?:        string
            [discord.Locale.Hindi]?:        string
            [discord.Locale.Hungarian]?:    string
            [discord.Locale.Italian]?:      string
            [discord.Locale.Japanese]?:     string
            [discord.Locale.Korean]?:       string
            [discord.Locale.Lithuanian]?:   string
            [discord.Locale.Norwegian]?:    string
            [discord.Locale.Polish]?:       string
            [discord.Locale.PortugueseBR]?: string
            [discord.Locale.Romanian]?:     string
            [discord.Locale.Russian]?:      string
            [discord.Locale.SpanishES]?:    string
            [discord.Locale.Swedish]?:      string
            [discord.Locale.Thai]?:         string
            [discord.Locale.Turkish]?:      string
            [discord.Locale.Ukrainian]?:    string
            [discord.Locale.Vietnamese]?:   string
        }

        permissions?: {

            member?: null | discord.PermissionFlags
            bot?:    null | discord.PermissionFlags
        }
    }

    schema?: {

        name?: string

        dm_permission?: boolean

        type?: discord.ApplicationCommandType

        default_member_permissions?: null | discord.PermissionFlags
        default_bot_permissions?:    null | discord.PermissionFlags

        name_localizations?: object
    }
};

export type MessageApplicationOptions = {

    name: string

    priority?: number
    intents?:  number

    events?: object

    type?: discord.ApplicationCommandType

    display?: {

        dm?: boolean

        name?: {

            default?: string

            [discord.Locale.Bulgarian]?:    string
            [discord.Locale.ChineseCN]?:    string
            [discord.Locale.ChineseTW]?:    string
            [discord.Locale.Croatian]?:     string
            [discord.Locale.Czech]?:        string
            [discord.Locale.Danish]?:       string
            [discord.Locale.Dutch]?:        string
            [discord.Locale.EnglishGB]?:    string
            [discord.Locale.EnglishUS]?:    string
            [discord.Locale.Finnish]?:      string
            [discord.Locale.French]?:       string
            [discord.Locale.German]?:       string
            [discord.Locale.Greek]?:        string
            [discord.Locale.Hindi]?:        string
            [discord.Locale.Hungarian]?:    string
            [discord.Locale.Italian]?:      string
            [discord.Locale.Japanese]?:     string
            [discord.Locale.Korean]?:       string
            [discord.Locale.Lithuanian]?:   string
            [discord.Locale.Norwegian]?:    string
            [discord.Locale.Polish]?:       string
            [discord.Locale.PortugueseBR]?: string
            [discord.Locale.Romanian]?:     string
            [discord.Locale.Russian]?:      string
            [discord.Locale.SpanishES]?:    string
            [discord.Locale.Swedish]?:      string
            [discord.Locale.Thai]?:         string
            [discord.Locale.Turkish]?:      string
            [discord.Locale.Ukrainian]?:    string
            [discord.Locale.Vietnamese]?:   string
        }

        permissions?: {

            member?: null | discord.PermissionFlags
            bot?:    null | discord.PermissionFlags
        }
    }

    schema?: {

        name?: string

        dm_permission?: boolean

        type?: discord.ApplicationCommandType

        default_member_permissions?: null | discord.PermissionFlags
        default_bot_permissions?:    null | discord.PermissionFlags

        name_localizations?: object
    }
};
