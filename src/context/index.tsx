import connectWithContract from "@/constant";
import React, { useContext, createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import { useAccount } from "@particle-network/connect-react-ui";
import { Account } from "@solana/web3.js";

type FluentProviderProps = {
  children: React.ReactNode;
};

interface Props {
  image: string;
  title: string;
  description: string;
  location: string;
  isOnsite: string;
  category: string;
  errandCost: number;
}

interface PodcastContextProps {
  allErrands: never[];
  postErrand: (props: Props) => Promise<void>;
  getAllErrand: () => void;
}

const ErrandContext = createContext<PodcastContextProps>({
  allErrands: [],
  postErrand: async (props: Props) => {},
  getAllErrand: () => {},
});

export const ErrandProvider = ({ children }: FluentProviderProps) => {
  const [allErrands, setAllErrands] = useState([]);

  const account = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (account) {
      router.push("/dashboard");
    }
  }, [account]);

  useEffect(() => {
    if (!account) {
      router.push("/signup");
    }
  }, [account]);

  const postErrand = async ({
    image,
    title,
    description,
    location,
    isOnsite,
    category,
    errandCost,
  }: Props) => {
    try {
      const errandContract = await connectWithContract();
      const errand = errandContract.createErrand(
        image,
        title,
        description,
        location,
        isOnsite,
        category,
        errandCost
      );
      console.log(errand);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllErrand = async () => {};

  const value = {
    allErrands,
    getAllErrand,
    postErrand,
  };

  return (
    <ErrandContext.Provider value={value}>{children}</ErrandContext.Provider>
  );
};

export const useFluentContext = (): PodcastContextProps =>
  useContext(ErrandContext);
