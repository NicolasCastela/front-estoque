<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login</h4>
                    <h6 class="text-center grey--text">
                      Bem vindo Colaborador - Faça seu login para ter acesso ao
                      Portal
                      <br />
                    </h6>
                    <v-alert
                      class="mt-4"
                      width="50%"
                      w
                      v-show="messageFailed"
                      type="error"
                      title="Credenciais inválidas."
                    >
                      {{ messageFailed }}
                    </v-alert>

                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          v-model="loginEmail"
                          color="blue"
                          autocomplete="false"
                          class="mt-10"
                        />
                        <v-text-field
                          label="Password"
                          outlined
                          v-model="loginPassword"
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Lembrar-me"
                              class="mt-n1"
                              color="blue"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text"
                              >Esqueci minha senha</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn color="blue" @click="login()" dark block tile
                          >Entrar</v-btn
                        >

                        <h5 class="text-center grey--text mt-4 mb-3"></h5>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Não tem uma conta ainda?</h3>
                      <h6 class="text-center">
                        Cadastre-se para ter acesso ao Portal<br />
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++"
                        >Cadastre-se</v-btn
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Já tem Cadastro?</h3>
                      <h6 class="text-center">
                        Faça o login com sua conta clicando no botão<br />
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">Entrar</v-btn>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Cadastre sua conta</h4>
                    <h6 class="text-center grey--text">
                      Complete os passos abaixo para criar sua conta
                      <br />
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Nome"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-4"
                        />
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        />
                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row>
                          <v-col cols="12" sm="9">
                            <v-checkbox
                              label="Eu aceito o termo"
                              class="mt-n3"
                              color="blue"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="2">
                            <span class="caption blue--text ml-n4">
                              <TermoServicos
                            /></span>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile>Criar conta</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LoginResponse, loginUser } from "@/services/usuarios.service";
import TermoServicos from "@/Adds/TermoServicos.vue";
export default defineComponent({
  name: "Login",
  data() {
    return {
      step: 1,
      loginEmail: "",
      loginPassword: "",
      messageFailed: "",
      user: "",
    };
  },
  mounted() {
    const userName = localStorage.getItem("userName");
    if (userName) {
      this.$router.push("/dashboard");
    }
  },

  methods: {
    async login() {
      try {
        const response: LoginResponse = await loginUser(
          this.loginEmail,
          this.loginPassword
        );
        if (response) {
          localStorage.setItem("userName", response.name);
          this.$router.push("/dashboard");
        }
      } catch (error: any) {
        console.log(error);
        this.messageFailed = error.message;

        // if (error.response && error.response.status === 401) {
        //   this.messageFailed = "Credenciais inválidas";
      }
    },
  },
  components: {
    TermoServicos,
  },
});
</script>
