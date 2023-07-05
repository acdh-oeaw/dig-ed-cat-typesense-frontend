<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon, HomeIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <header class="bg-slate-100">
    <div
      class="mx-auto flex w-full max-w-container flex-col items-center justify-between gap-x-4 gap-y-2 px-8 py-4 sm:flex-row"
    >
      <nuxt-link class="font-bold text-5xl select-none" href="/">
        DigEdCat
      </nuxt-link>
      <div class="flex gap-8 items-center">
        <div>
          <nuxt-link
            href="/"
            class="hover:bg-slate-200 active:bg-slate-300 transition rounded p-4 block"
          >
            <span class="sr-only">Home</span>
            <home-icon class="w-6 h-6" />
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            class="text-lg rounded p-4 hover:bg-slate-200 active:bg-slate-300 transition"
            href="/search"
          >
            Browse
          </nuxt-link>
        </div>
        <div>
          <Menu as="div" class="relative inline-block">
            <MenuButton
              as="div"
              class="text-lg rounded p-4 hover:bg-slate-200 active:bg-slate-300 ui-open:bg-slate-300 transition flex items-center cursor-pointer"
            >
              Analysis &nbsp; <ChevronDownIcon class="h-5 w-5" />
            </MenuButton>
            <MenuItems class="absolute right-0 shadow-lg mt-4">
              <div
                class="flex flex-col bg-slate-50 rounded divide-y min-w-[12rem] text-center"
              >
                <MenuItem>
                  <nuxt-link
                    class="text-lg p-4 hover:bg-slate-200 active:bg-slate-300 transition"
                    href="/map"
                  >
                    Map
                  </nuxt-link>
                </MenuItem>
                <MenuItem>
                  <nuxt-link
                    class="text-lg p-4 hover:bg-slate-200 active:bg-slate-300 transition"
                    href="/"
                  >
                    Faux Item
                  </nuxt-link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  </header>
</template>
