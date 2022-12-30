import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useRoutes } from "react-router-dom"

import { ReactComponent as WalletIcon } from "styles/images/menu/Wallet.svg"
import { ReactComponent as HistoryIcon } from "styles/images/menu/History.svg"

/* menu */
import Dashboard from "pages/dashboard/Dashboard"


/* txs */
import SendTx from "txs/send/SendTx"

/* auth */
import Auth from "auth/modules/Auth"
import ManageNetworksPage from "auth/networks/ManageNetworksPage"
import AddNetworkPage from "auth/networks/AddNetworkPage"

/* settings */
import Settings from "pages/Settings"

/* 404 */
import NotFound from "pages/NotFound"
import Polls from "pages/polls/Polls"
import SinglePollPage from "pages/polls/SinglePollPage"

const ICON_SIZE = { width: 20, height: 20 }

export const useNav = () => {
  const { t } = useTranslation()

  const menu = [
    {
      path: "/polls",
      element: <Polls />,
      title: t("Polls"),
      icon: <WalletIcon {...ICON_SIZE} />,
    },
  ]

  const routes = [
    { path: "/", element: <Dashboard /> },
    { path: "/polls", element: <Polls /> },
    { path: "/polls/:id", element: <SinglePollPage /> },

    /* pages */
    ...menu,
    
    /* txs */
    { path: "/send", element: <SendTx /> },

    /* auth */
    { path: "/auth/*", element: <Auth /> },
    { path: "/networks", element: <ManageNetworksPage /> },
    { path: "/network/new", element: <AddNetworkPage /> },
    { path: "/settings", element: <Settings /> },

    /* 404 */
    { path: "*", element: <NotFound /> },
  ]

  return { menu, element: useRoutes(routes) }
}

/* helpers */
export const useGoBackOnError = ({ error }: QueryState) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (error) navigate("..", { replace: true })
  }, [error, navigate])
}
