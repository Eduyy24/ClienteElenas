# Elenas Cliente

Aplicación movil, creada usando el framework Expo de React-native

## Instalacion
```
yarn  i
```

### Start
```
yarn start
```

### Tests
```
yarn test
```

#### Estructura de archivos
```
/
└ src
		└── components
        ├──  config
				└── constats.ts
        ├── modules
						└── graphql
									└── client
											└── gql
													└── mutations.ts
													└── querys.ts
													└── fragments.ts
										└── model
													└── clientModel.ts
										└── clientController.tsx
						└── ...
        └── pages
				└── home
							└── components
							└── home.tsx
							└── home-layout.tsx
			
```


#### Estructura de archivos
- components: Se compone de los componentes que pueden ser reutilizables, o para los componentes especificos de cada page
- config: directorio para archivos de configuración, como constantes, string, etc
- modules: se asigna carpeta por modulo a usar la app donde tiene un controlador y todas los directrios necesarios parael funcionamiento de este, los modelos van por modulos, pueden generarse modulos para manejo de base de datos, persistencia, etc.
- pages: puden manejar componentes propios, aqui se encuentra el controlador y la vista de una pagina. 


## Documentacion
Este repositorio cuenta con la documentacion de todos los componentes bajo el estandar JSDoc.