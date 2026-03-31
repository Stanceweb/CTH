<template>
    <div class="relative min-h-screen flex flex-col justify-between overflow-hidden bg-bg">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
            <div
                class="absolute inset-x-0 top-0 h-96"
                style="background: radial-gradient(circle at top center, rgba(59, 130, 246, 0.22), transparent 62%);"
            />
            <div
                class="absolute -left-24 top-30 h-72 w-72 rounded-full blur-3xl"
                style="background: rgba(59, 130, 246, 0.14);"
            />
            <div
                class="absolute right-[-5rem] top-[34%] h-88 w-88 rounded-full blur-3xl"
                style="background: rgba(96, 165, 250, 0.12);"
            />
            <div
                class="absolute bottom-[-7rem] left-[14%] h-64 w-64 rounded-full blur-3xl"
                style="background: rgba(37, 99, 235, 0.1);"
            />
        </div>
        <ElementNavbar />
        <slot />
        <ElementFooter />
    </div>
</template>
