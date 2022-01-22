import { useEffect, useState } from "react"
import { ChainId } from "../constants"
import { ethers } from "ethers"
import { useActiveWeb3React } from "."

type ReturnType = { ensName: string | null }

export const useENS = (address: string | null | undefined): ReturnType => {
  const [ensName, setENSName] = useState<string | null>(null)
  const { library, chainId } = useActiveWeb3React()

  useEffect(() => {
    async function resolveENS() {
      if (
        address &&
        library &&
        ethers.utils.isAddress(address) &&
        chainId === ChainId.MAINNET
      ) {
        const provider = new ethers.providers.Web3Provider(library.provider)
        const ensName = await provider.lookupAddress(address)
        if (ensName) setENSName(ensName)
      }
    }
    resolveENS().catch(console.error)
  }, [address, library, chainId])

  return { ensName }
}
