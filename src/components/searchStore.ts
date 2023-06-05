import { SearchUsersResult } from "@/github/api";
import { create } from "zustand";

type UserSearchState = {
  text: string;
  isLoading: boolean;
  data: SearchUsersResult | null;
  error: any;

  setText: (text: string) => void;
  fetch: (text: string) => void;
};

let controller: AbortController | undefined;

export const useUserSearchStore = create<UserSearchState>((set) => ({
  text: "",
  isLoading: false,
  data: null,
  error: null,
  //
  setText(text) {
    set({ text });
  },
  fetch(text) {
    if (controller) {
      controller.abort();
    }
    set({ text, isLoading: true, data: null, error: null });

    controller = new AbortController();
    const signal = controller.signal;

    const url = `/api/searchTop5Users?q=${text}`;

    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => {
        set({ data, error: null, isLoading: false });
      })
      .catch((error) => {
        if (error?.message != "The user aborted a request.") {
          set({ data: null, error, isLoading: false });
        }
      });
  },
}));
