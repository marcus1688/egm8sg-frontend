
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'AddBankAccount': typeof import("../../components/AddBankAccount.vue")['default']
  'ChangeBirthdayModal': typeof import("../../components/ChangeBirthdayModal.vue")['default']
  'ChangeEmailModal': typeof import("../../components/ChangeEmailModal.vue")['default']
  'ChangeFacebookModal': typeof import("../../components/ChangeFacebookModal.vue")['default']
  'ChangeTelegramModal': typeof import("../../components/ChangeTelegramModal.vue")['default']
  'ConfirmAlert': typeof import("../../components/ConfirmAlert.vue")['default']
  'GameBalanceDropdown': typeof import("../../components/GameBalanceDropdown.vue")['default']
  'GameCardGrid': typeof import("../../components/GameCardGrid.vue")['default']
  'GameListItem': typeof import("../../components/GameListItem.vue")['default']
  'GamePromoCards': typeof import("../../components/GamePromoCards.vue")['default']
  'HomeBlogSection': typeof import("../../components/HomeBlogSection.vue")['default']
  'HomeGamesSection': typeof import("../../components/HomeGamesSection.vue")['default']
  'HomePopup': typeof import("../../components/HomePopup.vue")['default']
  'HomePromotionList': typeof import("../../components/HomePromotionList.vue")['default']
  'HomeRegistrationSteps': typeof import("../../components/HomeRegistrationSteps.vue")['default']
  'HomeTestimonials': typeof import("../../components/HomeTestimonials.vue")['default']
  'Leaderboard': typeof import("../../components/Leaderboard.vue")['default']
  'LiveChatButton': typeof import("../../components/LiveChatButton.vue")['default']
  'LoadingButton': typeof import("../../components/LoadingButton.vue")['default']
  'LuckySpin': typeof import("../../components/LuckySpin.vue")['default']
  'MessageModal': typeof import("../../components/MessageModal.vue")['default']
  'MobileFooter': typeof import("../../components/MobileFooter.vue")['default']
  'Notification': typeof import("../../components/Notification.vue")['default']
  'PageLoading': typeof import("../../components/PageLoading.vue")['default']
  'PromotionModal': typeof import("../../components/PromotionModal.vue")['default']
  'Sports': typeof import("../../components/Sports.vue")['default']
  'Transaction': typeof import("../../components/Transaction.vue")['default']
  'TransferModal': typeof import("../../components/TransferModal.vue")['default']
  'TrustedPartners': typeof import("../../components/TrustedPartners.vue")['default']
  'TurnoverProgressBar': typeof import("../../components/TurnoverProgressBar.vue")['default']
  'UserSideBar': typeof import("../../components/UserSideBar.vue")['default']
  'VipProgressBar': typeof import("../../components/VipProgressBar.vue")['default']
  'Alerts': typeof import("../../components/alerts.vue")['default']
  'Footer': typeof import("../../components/footer.vue")['default']
  'Header': typeof import("../../components/header.vue")['default']
  'NuxtMarquee': typeof import("../../node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue")['default']
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  'NuxtImg': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  'NuxtPicture': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  'NuxtLinkLocale': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
  'SwitchLocalePathLink': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  'LazyAddBankAccount': LazyComponent<typeof import("../../components/AddBankAccount.vue")['default']>
  'LazyChangeBirthdayModal': LazyComponent<typeof import("../../components/ChangeBirthdayModal.vue")['default']>
  'LazyChangeEmailModal': LazyComponent<typeof import("../../components/ChangeEmailModal.vue")['default']>
  'LazyChangeFacebookModal': LazyComponent<typeof import("../../components/ChangeFacebookModal.vue")['default']>
  'LazyChangeTelegramModal': LazyComponent<typeof import("../../components/ChangeTelegramModal.vue")['default']>
  'LazyConfirmAlert': LazyComponent<typeof import("../../components/ConfirmAlert.vue")['default']>
  'LazyGameBalanceDropdown': LazyComponent<typeof import("../../components/GameBalanceDropdown.vue")['default']>
  'LazyGameCardGrid': LazyComponent<typeof import("../../components/GameCardGrid.vue")['default']>
  'LazyGameListItem': LazyComponent<typeof import("../../components/GameListItem.vue")['default']>
  'LazyGamePromoCards': LazyComponent<typeof import("../../components/GamePromoCards.vue")['default']>
  'LazyHomeBlogSection': LazyComponent<typeof import("../../components/HomeBlogSection.vue")['default']>
  'LazyHomeGamesSection': LazyComponent<typeof import("../../components/HomeGamesSection.vue")['default']>
  'LazyHomePopup': LazyComponent<typeof import("../../components/HomePopup.vue")['default']>
  'LazyHomePromotionList': LazyComponent<typeof import("../../components/HomePromotionList.vue")['default']>
  'LazyHomeRegistrationSteps': LazyComponent<typeof import("../../components/HomeRegistrationSteps.vue")['default']>
  'LazyHomeTestimonials': LazyComponent<typeof import("../../components/HomeTestimonials.vue")['default']>
  'LazyLeaderboard': LazyComponent<typeof import("../../components/Leaderboard.vue")['default']>
  'LazyLiveChatButton': LazyComponent<typeof import("../../components/LiveChatButton.vue")['default']>
  'LazyLoadingButton': LazyComponent<typeof import("../../components/LoadingButton.vue")['default']>
  'LazyLuckySpin': LazyComponent<typeof import("../../components/LuckySpin.vue")['default']>
  'LazyMessageModal': LazyComponent<typeof import("../../components/MessageModal.vue")['default']>
  'LazyMobileFooter': LazyComponent<typeof import("../../components/MobileFooter.vue")['default']>
  'LazyNotification': LazyComponent<typeof import("../../components/Notification.vue")['default']>
  'LazyPageLoading': LazyComponent<typeof import("../../components/PageLoading.vue")['default']>
  'LazyPromotionModal': LazyComponent<typeof import("../../components/PromotionModal.vue")['default']>
  'LazySports': LazyComponent<typeof import("../../components/Sports.vue")['default']>
  'LazyTransaction': LazyComponent<typeof import("../../components/Transaction.vue")['default']>
  'LazyTransferModal': LazyComponent<typeof import("../../components/TransferModal.vue")['default']>
  'LazyTrustedPartners': LazyComponent<typeof import("../../components/TrustedPartners.vue")['default']>
  'LazyTurnoverProgressBar': LazyComponent<typeof import("../../components/TurnoverProgressBar.vue")['default']>
  'LazyUserSideBar': LazyComponent<typeof import("../../components/UserSideBar.vue")['default']>
  'LazyVipProgressBar': LazyComponent<typeof import("../../components/VipProgressBar.vue")['default']>
  'LazyAlerts': LazyComponent<typeof import("../../components/alerts.vue")['default']>
  'LazyFooter': LazyComponent<typeof import("../../components/footer.vue")['default']>
  'LazyHeader': LazyComponent<typeof import("../../components/header.vue")['default']>
  'LazyNuxtMarquee': LazyComponent<typeof import("../../node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue")['default']>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  'LazyNuxtLinkLocale': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
  'LazySwitchLocalePathLink': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
