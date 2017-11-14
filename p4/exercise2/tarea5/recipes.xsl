<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version = "1.0" 
    xmlns:xsl= "http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>Recetas de cocina Veganas</title>
                <link rel = "stylesheet" type="text/css"    href = "estilo.css"/>
            </head>
            <body>
                <h1>Mis mejores Recetas Veganas</h1>
                <xsl:for-each select="recipes/recipe">
                    <xsl:if test = "not(ingredients/ingredient/@nombre = 'Leche')">
                        <xsl:if test = "not(ingredients/ingredient/@nombre = 'Queso')">
                            <xsl:if test = "not(ingredients/ingredient/@nombre = 'Huevos')">
                                <xsl:if test = "not(ingredients/ingredient/@nombre = 'Carne')">
                                    <xsl:if test = "not(ingredients/ingredient/@nombre = 'Pescado')">
                                        <xsl:if test = "not(ingredients/ingredient/@nombre = 'Chorizo')">
                                            <xsl:if test = "not(ingredients/ingredient/@nombre = 'Morcilla')">
                                                <xsl:if test = "not(ingredients/ingredient/@nombre = 'Rabo de toro')">
                                                    <xsl:if test = "not(ingredients/ingredient/@nombre = 'Pollo')">
                                                        <xsl:if test = "not(ingredients/ingredient/@nombre = 'huevos')">
                                                            <h2>
                                                                <xsl:value-of select= "@nombre"/>
                                                            </h2>
                                                            <p>Tipo:                                                                                                                                                                                                                                                                                                       
                                                                <xsl:value-of select= "@tipo"/>
                                                            </p>
                                                            <p>Dificultad:                                                                                                                                                                                                                                                                                                                        
                                                                <xsl:value-of select= "@dificultad"/>
                                                            </p>
                                                            <p>Calorias:                                                                                                                                                                                                                                                                                                              
                                                                <xsl:value-of select= "@calorias"/>
                                                            </p>
                                                            <p>Tiempo de elaboracion:                                                                                                                                                                                                                                                                                                                
                                                                <xsl:value-of select= "@tiempo_de_elaboracion"/>
                                                            </p>
                                                            <p>Origen de la receta:
                                                                                                                                                                                                                        
                                                                <xsl:value-of select= "origin"/>
                                                            </p>
                                                            <h3>Lista de ingredientes</h3>
                                                            <ul>
                                                                <xsl:for-each select = "ingredients/*">
                                                                    <li>
                                                                        <xsl:value-of select= "@nombre"/>(
                                                                                                                                                                                                                                                                                                        
                                                                        <xsl:value-of select= "@cantidad"/>)
                                                                                                                                                                                                                                                                                                        
                                                                    </li>
                                                                </xsl:for-each>
                                                            </ul>
                                                            <h3>Pasos</h3>
                                                            <ol>
                                                                <xsl:for-each select = "cooking_steps/*">
                                                                    <li>
                                                                        <xsl:value-of select = "."/>
                                                                    </li>
                                                                </xsl:for-each>
                                                            </ol>
                                                            <h3>Utensilios</h3>
                                                            <ul>
                                                                <xsl:for-each select = "tools/*">
                                                                    <li>
                                                                        <xsl:value-of select= "@nombre"/>
                                                                    </li>
                                                                </xsl:for-each>
                                                            </ul>
                                                        </xsl:if>
                                                    </xsl:if>
                                                </xsl:if>
                                            </xsl:if>
                                        </xsl:if>
                                    </xsl:if>
                                </xsl:if>
                            </xsl:if>
                        </xsl:if>
                    </xsl:if>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>