<template>
	<Title Text="Contacto" />
	<div class="contact">
		<div class="leftContent">
			<div class="row">
				<div class="col-6 firstRow">
					<label for="mail">Nombre:</label>
					<input
						type="text"
						class="form-control"
						placeholder="Ingresa tu nombre"
						style="margin-bottom: 10px !important;"
						id="name"
						v-model="name"
					/>
				</div>
				<div class="col-6 firstRow">
					<label for="mail">Correo:</label>
					<input type="mail" class="form-control" placeholder="Ingresa un correo" id="mail" v-model="mail" />
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-12">
					<label for="mail">Asunto:</label>
					<input type="mail" class="form-control" placeholder="Ingresa el asunto" id="subject" v-model="subject" />
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-12">
					<label for="text">Mensaje:</label>
					<textarea class="form-control" rows="3" placeholder="Coloca tu mensaje" id="text" v-model="text"></textarea>
				</div>
			</div>

			<button class="buttonContact mt-3" @click="sendMail()">Enviar</button>
		</div>
		<div class="rightContent">
			<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16337048.9026985!2d-81.5444842133952!3d1.4519299340672127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sQuito!5e0!3m2!1ses!2sec!4v1654043782951!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			<!-- <img id="map" src="../assets/images/map.png" alt="" /> -->
		</div>
	</div>
</template>

<script>
	import Title from "./Title.vue";
	export default {
		name: "Contact",
		data() {
			return {
				name: null,
				mail: null,
				subject: null,
				text: null,
			};
		},
		components: {
			Title,
		},
		computed:{
		},
		methods: {
			async sendMail() {
				try {
					if ((!this.name, !this.mail, !this.subject, !this.text)) {
						console.log("campos vacíos");
						this.$swal({
							icon: "warning",
							title: "<span style='color:#fff'>Revisa que todos los campos esten llenos...</span>",
							showConfirmButton: true,
							showLoaderOnConfirm: true,
							showClass: {
								popup: "animated fadeInDown faster",
								icon: "animated heartBeat delay-1s",
							},
							hideClass: {
								popup: "animated fadeOutUp faster",
							},
							background: "#002142",
							confirmButtonColor: "#2BB895",
						});
						return;
					}
					const url = "https://portfolio-jh512.herokuapp.com";
					const config = {
						method: "POST",
						headers: { "Content-type": "application/json" },
						body: JSON.stringify({
							mail: this.mail,
							name: this.name,
							subject: this.subject,
							text: this.text,
						}),
					};
					console.log(mail);
					const post = await fetch(`${url}/contact`, config);
					const resp = await post.json();
					console.log("RESPONSE:");
					console.log(resp);
					this.$swal({
						icon: "success",
						title: "<span style='color:#fff'>Gracias por tu interés, pronto me pondré en contacto contigo</span>",
						showConfirmButton: true,
						showClass: {
							popup: "animated fadeInDown faster",
							icon: "animated heartBeat delay-1s",
						},
						hideClass: {
							popup: "animated fadeOutUp faster",
						},
						showLoaderOnConfirm: true,
						background: "#002142",
						confirmButtonColor: "#2BB895",
					});
				} catch (error) {
					console.log(`error: ${error}`);
				}
			},
		},
	};
</script>

<style scoped>
	label {
		font-size: 25px;
		color: #fff;
		font-weight: 700;
	}
	#map {
		width: 100%;
		border-radius: 20px;
		opacity: 0.8;
	}
	.contact {
		margin: 100px 0 0 0;
		display: flex;
		flex-wrap: wrap;
	}
	.leftContent {
		width: 50%;
	}
	.rightContent {
		width: 50%;
	}
	.row {
		width: 80%;
	}
	.buttonContact {
		padding: 9px 25px;
		background-color: #229679;
		border: none;
		border-radius: 50px;
		cursor: pointer;
		transition: all 0.3s ease 0s;
	}

	.buttonContact:hover {
		background-color: #2bb895;
	}

	@media (min-width: 0px) and (max-width: 360px) {
		.contact {
			margin: 40px 0 0 0;
			flex-direction: column;
			width: 100%;
		}
		.leftContent {
			width: 100%;
		}
		.rightContent {
			width: 100%;
		}
		.form-control {
			width: 100%;
		}
		.row {
			display: flex;
			flex-direction: column;
			margin: 20px 0 !important;
			padding: 0 !important;
			width: 100%;
		}
		.firstRow {
			width: 100%;
		}
		.buttonContact {
			display: block;
			margin: 0 auto 15px auto;
		}
		#map {
			display: none;
		}
	}
	@media (min-width: 361px) and (max-width: 1000px) {
		.contact {
			margin: 40px 0 0 0;
			flex-direction: column;
			width: 100%;
		}
		.leftContent {
			width: 100%;
		}
		.rightContent {
			width: 100%;
		}
		.form-control {
			width: 100%;
		}
		.row {
			display: flex;
			flex-direction: column;
			margin: 20px 0 !important;
			padding: 0 !important;
			width: 100%;
		}
		.firstRow {
			width: 100%;
		}
		.buttonContact {
			display: block;
			margin: 0 auto 15px auto;
		}
		#map {
			display: none;
		}
	}
	@media (min-width: 1001px) and (max-width: 1200px) {
		.contact {
			margin: 40px 0 0 0;
			width: 100%;
		}
		.leftContent {
			width: 50%;
		}
		.rightContent {
			width: 50%;
			display: flex;
			align-items: center;
		}
		.form-control {
			width: 100%;
		}
		.row {
			display: flex;
			flex-direction: column;
			margin: 20px 0 !important;
			padding: 0 !important;
			width: 100%;
		}
		.firstRow {
			width: 100%;
		}
		.buttonContact {
			display: block;
			margin: 0 auto 15px auto;
		}
		#map {
			width: 90%;
			height: 50%;
			margin: 0 auto;/*  */
		}
	}
</style>
