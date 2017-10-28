<?xml version= "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0" 
    xmlns:xsl= "http://www.w3.org/1999/XSL/Transform">
<<<<<<< HEAD
    <xsl:template match="article">
=======
    <xsl:output method="html"/>
    <xsl:template match="/">
>>>>>>> 535f9fc0812f1c416ec3ec3ced720981a7809ecc
        <html>
            <head>
                <title>Articulos de mi practica de laboratorio</title>
            </head>
            <body>
                <h1>Seleccion de Articulos</h1>
<<<<<<< HEAD
                <h2>
                    <xsl:value-of select = "@titulo"/>
                </h2>
                <p>Página inicio:
                    <xsl:value-of select = "@pagina_inicio"/>
                </p>
                <p>Página final:
                    <xsl:value-of select = "@pagina_final"/>
                </p>
                <p>Año: 
                    <xsl:value-of select = "@año"/>
                </p>
                <h3>Autores</h3>
                <xsl:for-each select="authors/*">
                        <p>Autor: <xsl:value-of select="@nombre"/></p>
                        <p>Email: <xsl:value-of select="@email"/></p>
                </xsl:for-each>
                <h3>Resumen</h3>
                <p><xsl:value-of select = "abstract"/></p>
                <h3>Palabras Clave</h3>
                <p>
                <xsl:for-each select="keywordset/*">
                    <xsl:value-of select = "."/>,
                </xsl:for-each>
                </p>
                <h3>Revista</h3>
                <p>Nombre: <xsl:value-of select = "magazine/@nombre"/></p>
                <p>Volumen: <xsl:value-of select = "magazine/@volumenum"/></p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
=======
                <xsl:for-each select="articles/article">
                    <h2>
                        <xsl:value-of select = "@titulo"/>
                    </h2>
                    <p>Página inicio:
                                                                                                                                                            
                        <xsl:value-of select = "@pagina_inicio"/>
                    </p>
                    <p>Página final:
                                                                                                                                                            
                        <xsl:value-of select = "@pagina_final"/>
                    </p>
                    <p>Año:                                                                                                                                                         
                        <xsl:value-of select = "@año"/>
                    </p>
                    <h3>Autores</h3>
                    <xsl:for-each select="authors/*">
                        <p>Autor:                                                                                                                                                             
                            <xsl:value-of select="@nombre"/>
                        </p>
                        <p>Email:                                                                                                                                                             
                            <xsl:value-of select="@email"/>
                        </p>
                    </xsl:for-each>
                    <h3>Resumen</h3>
                    <p>
                        <xsl:value-of select = "abstract"/>
                    </p>
                    <h3>Palabras Clave</h3>
                    <p>
                        <xsl:for-each select="keywordset/*">
                            <xsl:value-of select = "."/>,
                                                                                                                                                        
                        </xsl:for-each>
                    </p>
                    <h3>Revista</h3>
                    <p>Nombre:                                                                                                                                     
                        <xsl:value-of select = "magazine/@nombre"/>
                    </p>
                    <p>Volumen:                                                                                                                                     
                        <xsl:value-of select = "magazine/@volumenum"/>
                    </p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
>>>>>>> 535f9fc0812f1c416ec3ec3ced720981a7809ecc
