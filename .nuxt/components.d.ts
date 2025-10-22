
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


export const AddBankAccount: typeof import("../components/AddBankAccount.vue")['default']
export const ChangeBirthdayModal: typeof import("../components/ChangeBirthdayModal.vue")['default']
export const ChangeEmailModal: typeof import("../components/ChangeEmailModal.vue")['default']
export const ChangeFacebookModal: typeof import("../components/ChangeFacebookModal.vue")['default']
export const ChangeTelegramModal: typeof import("../components/ChangeTelegramModal.vue")['default']
export const ConfirmAlert: typeof import("../components/ConfirmAlert.vue")['default']
export const GameBalanceDropdown: typeof import("../components/GameBalanceDropdown.vue")['default']
export const GameCardGrid: typeof import("../components/GameCardGrid.vue")['default']
export const GameListItem: typeof import("../components/GameListItem.vue")['default']
export const GamePromoCards: typeof import("../components/GamePromoCards.vue")['default']
export const HomeBlogSection: typeof import("../components/HomeBlogSection.vue")['default']
export const HomeGamesSection: typeof import("../components/HomeGamesSection.vue")['default']
export const HomePopup: typeof import("../components/HomePopup.vue")['default']
export const HomePromotionList: typeof import("../components/HomePromotionList.vue")['default']
export const HomeRegistrationSteps: typeof import("../components/HomeRegistrationSteps.vue")['default']
export const HomeTestimonials: typeof import("../components/HomeTestimonials.vue")['default']
export const Leaderboard: typeof import("../components/Leaderboard.vue")['default']
export const LiveChatButton: typeof import("../components/LiveChatButton.vue")['default']
export const LoadingButton: typeof import("../components/LoadingButton.vue")['default']
export const LuckySpin: typeof import("../components/LuckySpin.vue")['default']
export const MessageModal: typeof import("../components/MessageModal.vue")['default']
export const MobileFooter: typeof import("../components/MobileFooter.vue")['default']
export const Notification: typeof import("../components/Notification.vue")['default']
export const PageLoading: typeof import("../components/PageLoading.vue")['default']
export const PromotionModal: typeof import("../components/PromotionModal.vue")['default']
export const Sports: typeof import("../components/Sports.vue")['default']
export const Transaction: typeof import("../components/Transaction.vue")['default']
export const TransferModal: typeof import("../components/TransferModal.vue")['default']
export const TrustedPartners: typeof import("../components/TrustedPartners.vue")['default']
export const TurnoverProgressBar: typeof import("../components/TurnoverProgressBar.vue")['default']
export const UserSideBar: typeof import("../components/UserSideBar.vue")['default']
export const VipProgressBar: typeof import("../components/VipProgressBar.vue")['default']
export const Alerts: typeof import("../components/alerts.vue")['default']
export const Footer: typeof import("../components/footer.vue")['default']
export const Header: typeof import("../components/header.vue")['default']
export const NuxtMarquee: typeof import("../node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAddBankAccount: LazyComponent<typeof import("../components/AddBankAccount.vue")['default']>
export const LazyChangeBirthdayModal: LazyComponent<typeof import("../components/ChangeBirthdayModal.vue")['default']>
export const LazyChangeEmailModal: LazyComponent<typeof import("../components/ChangeEmailModal.vue")['default']>
export const LazyChangeFacebookModal: LazyComponent<typeof import("../components/ChangeFacebookModal.vue")['default']>
export const LazyChangeTelegramModal: LazyComponent<typeof import("../components/ChangeTelegramModal.vue")['default']>
export const LazyConfirmAlert: LazyComponent<typeof import("../components/ConfirmAlert.vue")['default']>
export const LazyGameBalanceDropdown: LazyComponent<typeof import("../components/GameBalanceDropdown.vue")['default']>
export const LazyGameCardGrid: LazyComponent<typeof import("../components/GameCardGrid.vue")['default']>
export const LazyGameListItem: LazyComponent<typeof import("../components/GameListItem.vue")['default']>
export const LazyGamePromoCards: LazyComponent<typeof import("../components/GamePromoCards.vue")['default']>
export const LazyHomeBlogSection: LazyComponent<typeof import("../components/HomeBlogSection.vue")['default']>
export const LazyHomeGamesSection: LazyComponent<typeof import("../components/HomeGamesSection.vue")['default']>
export const LazyHomePopup: LazyComponent<typeof import("../components/HomePopup.vue")['default']>
export const LazyHomePromotionList: LazyComponent<typeof import("../components/HomePromotionList.vue")['default']>
export const LazyHomeRegistrationSteps: LazyComponent<typeof import("../components/HomeRegistrationSteps.vue")['default']>
export const LazyHomeTestimonials: LazyComponent<typeof import("../components/HomeTestimonials.vue")['default']>
export const LazyLeaderboard: LazyComponent<typeof import("../components/Leaderboard.vue")['default']>
export const LazyLiveChatButton: LazyComponent<typeof import("../components/LiveChatButton.vue")['default']>
export const LazyLoadingButton: LazyComponent<typeof import("../components/LoadingButton.vue")['default']>
export const LazyLuckySpin: LazyComponent<typeof import("../components/LuckySpin.vue")['default']>
export const LazyMessageModal: LazyComponent<typeof import("../components/MessageModal.vue")['default']>
export const LazyMobileFooter: LazyComponent<typeof import("../components/MobileFooter.vue")['default']>
export const LazyNotification: LazyComponent<typeof import("../components/Notification.vue")['default']>
export const LazyPageLoading: LazyComponent<typeof import("../components/PageLoading.vue")['default']>
export const LazyPromotionModal: LazyComponent<typeof import("../components/PromotionModal.vue")['default']>
export const LazySports: LazyComponent<typeof import("../components/Sports.vue")['default']>
export const LazyTransaction: LazyComponent<typeof import("../components/Transaction.vue")['default']>
export const LazyTransferModal: LazyComponent<typeof import("../components/TransferModal.vue")['default']>
export const LazyTrustedPartners: LazyComponent<typeof import("../components/TrustedPartners.vue")['default']>
export const LazyTurnoverProgressBar: LazyComponent<typeof import("../components/TurnoverProgressBar.vue")['default']>
export const LazyUserSideBar: LazyComponent<typeof import("../components/UserSideBar.vue")['default']>
export const LazyVipProgressBar: LazyComponent<typeof import("../components/VipProgressBar.vue")['default']>
export const LazyAlerts: LazyComponent<typeof import("../components/alerts.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/footer.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/header.vue")['default']>
export const LazyNuxtMarquee: LazyComponent<typeof import("../node_modules/nuxt-marquee/dist/runtime/components/NuxtMarquee.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
