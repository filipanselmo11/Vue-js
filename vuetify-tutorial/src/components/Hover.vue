<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-hover v-slot="{ hover }" disabled>
          <v-card
            :elevation="hover ? 12 : 2"
            class="mx-auto"
            height="350"
            max-width="350"
          >
            <v-card-text class="my-4 text-center text-h6">
              Hover over me !
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <br />
    <v-row>
        <v-col cols="12" sm="6">
            <v-hover v-slot="{ hover }" open-delay="200">
                <v-card
                    :elevation="hover ? 16 : 2"
                    :class="{ 'on-hover': hover }"
                    class="mx-auto"
                    height="350"
                    max-width="350">
                        <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
                            Open Delay (Mouse enter)
                        </v-card-text>
                    </v-card>
            </v-hover>
        </v-col>

        <v-col cols="12" sm="6">
            <v-hover v-slot="{ hover }" close-delay="200">
                <v-card
                    :elevation="hover ? 16 : 2"
                    :class="{'on-hover': hover}"
                    class="mx-auto"
                    height="350"
                    max-width="350">
                        <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
                            Close Delay (Mouse leave)
                        </v-card-text>
                    </v-card>
            </v-hover>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>